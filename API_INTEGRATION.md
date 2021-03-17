# Guidelines for API Integration

## Stack

- [Axios](https://github.com/axios/axios): For making API requests.
- [React Query](https://react-query.tanstack.com): Hooks for fetching, caching and updating asynchronous data.

**N/B**: It is important to read the documentation for React Query, after reading this, to better understand it's [configuration defaults](https://react-query.tanstack.com/docs/guides/important-defaults) and how it works.

## Process

React Query has three hooks that are of interest to us:

- `useQuery` - The primary hook. This has the signature:

  ```javascript
  import { useQuery } from "react-query";

  const { status, error, data } = useQuery(
    queryKey,
    async function fetcherFunction(...queryKey) {
      // The function to actually perform the API request
    }
  );
  ```

  The above hook causes useQuery to invoke the `fetcherFunction` once the component is mounted, and `status` is updated to reflect the status of the request as the function executes, from `loading` to `success` or `error`.
  The object returned by useQuery includes some other fields that you may consult the documentation for (of particular note are the `isXXXX` status booleans, `isFetching` for example, is true if the query is fetching or refetching).
  `status` is one of four values, which describes the state of the ongoing request:

  - `idle`
  - `loading`
  - `success`
  - `error`

  The `queryKey` will be comverted to an array and spread as `...rest` arguments to the `fetcherFunction`. It's best to pass them in the key instead of invoking the function with the parameters directly so that react-query knows when to invalidate the query and refetch the query, much like `useEffect` re-runs your effect when the dependency array changes.
  If there are named parameters to be passed to the endpoint, pass it as an object. If it's only one parameter, particularly URL parameters, you can use a variable instead.
  e.g

  ```javascript
  const simpleQueryKey = ["procurementPlan", planId]; // simple
  const namedParamQueryKey = ["contract", { planId, contractId }]; // named parameters
  ```

  The queryKey you pass to `useQuery` or `usePaginatedQuery` should be _globally_ unique, unless two different components need to hit the same endpoint/access the same data, in that case using the same query key means react-query will intelligently return the pre-existing data. Note that react-query uses the _entire_ query key you provide to identify the request. That is, the following are all different requests:

  ```javascript
  let key = ["a", 1];
  let key = ["a", 2];
  let key = ["a", 1, 2];
  let key = ["a", { planId: 1 }];
  let key = ["a", { planId: 2 }];
  ```

  The first item in the array should be a string that identifies what category of request it is, i.e.

  ```javascript
  let key = ["getProcurementPlan", 1];
  let key = ["getContract", 1];
  ```

  As seen above, it helps prevents key collisions. And as a convenience, it makes it easier to identify requests in the react-query devtools.

- `usePaginatedQuery` - This hook is very similar to the above, with the added benefit of pagination. The main difference are the two data fields, `resolvedData` and `latestData`. `latestData` always points to the latest data, so it's null if you're fetching page 2 after fetching page 1 for example. `resolvedData` always points to the last available data, so it's the data for page 1, while you're fetching page 2. Once page 2 is available, `resolvedData` updates to page 2.
  `isFetching` is particularly useful here, as `status` is `loading` from the moment the first request is successful. See the example below.
- `useMutation` - The above two hooks are meant for _fetching_ resources, that is GET requests that simply return some resource(s). Other methods like POST/PUT/PATCH should use this hook, as it returns a function that can be invoked with some data to actually _trigger_ the request. It's a particularly powerful hook, especially when used in conjuction with `queryCache`. Here is the signature for the function (the object in particular is very similar to what `useQuery` returns):

  ```javascript
  import { useMutation } from "react-query";

  const [mutate, { status, error, data, reset }] = useMutation(
    async function mutatorFunction(variables) {
      // Make the request with the variables
    }
  );

  useEffect(() => {
    if (status === "error") {
      // Do something with the error
    }
  }, [status, error]);

  const handleClick = async () => {
    // You don't need to process the error here
    // You can use a useEffect as shown above
    // This is useful if you need to do something immediately
    // the mutation resolves or an error occurs
    try {
      // The mutate function takes an object that it passes on to the mutator function
      const data = await mutate({
        // data to send to the backend
      });
    } catch {
      // Something broke, show an alert or something
    }
  };

  // You can call this to reset the state of the mutation, if needed.
  // You don't need to call this before invoking mutate again.
  reset();
  ```

## Examples

Create a fetcher or mutator function within the appropriate API file, or create a new file if no related file exists. Ensure to give descriptive names to the functions but keep in mind that the functions will be part of an object so don't be too verbose, e.g. `procurementAPI.getContracts` is better than `procurementAPI.getProcurementContracts`. Mutations should have it clear in their name that they mutate stuff, e.g. `procurementAPI.uploadDocuments` clearly doesn't make a GET request.

Ensure to wrap your code in a `try...catch` block, call `handleApiError` to get a human readable message and then `throw new Error([return value from handleApiError])`. **Avoid throwing strings**.

### Making GET requests (useQuery)

Here's an example of how to use `useQuery`.

Within an API file:

```javascript
procurementAPI.getContracts = async function (_, procurementPlanId) {
  try {
    const response = await Api(
      `/procurements/${procurementPlanId}/contracts`
    );
    return response.data.data;
  } catch (e) {
    throw new Error(handleApiError(e));
  }
};
```

Within the page component:

```javascript
function MyPageComponent() {
  const { params: { planId } } = useRouteMatch()
  const { status, error, data } = useQuery(["getProcurementPlanContracts", planId], procurementAPI.getContracts)
  const { Toast, showAlert } = useAlert()

  if (status === "loading") return <Loader />

  useEffect(() => {
    if (status === "error") {
      showAlert({
        severity: "error",
        message: error.message
      })
    }
  }, [status, error, showAlert])

  return (
    <React.Fragment>
      <Toast float>
      {status === "success" && (
        // render the data
        JSON.stringify(data)
      )}
    </React.Fragment>
  )
}
```

### Making paginated GET requests (usePaginatedQuery)

Here's an example of how to use `usePaginatedQuery`.

Within an API file:

```javascript
procurementAPI.getContracts = async function (
  _,
  { procurementPlanId, page = 1, pageSize = 30 }
) {
  try {
    const response = await Api(
      `/procurements/${procurementPlanId}/contracts?PageNumber=${page}&PageSize=${pageSize}`
    );
    return {
      data: response.data.data,
      pagination: response.data.meta.pagination,
    };
  } catch (e) {
    throw new Error(handleApiError(e));
  }
};
```

Within the page component:

```javascript
function MyPageComponent() {
  const { params: { procurementPlanId } } = useRouteMatch()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(30)
  const { status, isFetching, error, resolvedData } = usePaginatedQuery(["getProcurementPlanContracts", { procurementPlanId, page, pageSize }], procurementAPI.getContracts)
  const { Toast, showAlert } = useAlert()

  if (status === "loading") return <Loader />

  useEffect(() => {
    if (status === "error") {
      showAlert({
        severity: "error",
        message: error.message
      })
    }
  }, [status, error, showAlert])

  return (
    <React.Fragment>
      <Toast float>
      {status === "success" && (
        <React.Fragment>
        {/* render resolvedData, so there's always something on screen */}
        {resolveData.data.map(item => (
          // render magic here
          JSON.stringify(item)
        ))}
        {/* Show a loading indicator somewhere, so the user knows the table is loading during a page change */}
        {isFetching && <p>Loading...</p>}
        {/* For pagination: */}
        <PaginationComponent
          disablePrev={page === 0}
          disableNext={page === resolvedData.pagination.totalPages}
          onPrevPage={() => setPage(page => Math.max(0, page - 1))}
          onNextPage={() => setPage(page => page + 1)}
        />
      )}

    </React.Fragment>
  )
}
```

Check the documentation for a [guide](https://react-query.tanstack.com/docs/guides/paginated-queries).

### Making POST (or other methods) requests (useMutation)

Here's an example of how to use `useMutation`

Within the API file

```javascript
procurementAPI.uploadDocuments = async function ({
  mandatoryDocuments,
  supportingDocuments,
  planActivityId,
}) {
  try {
    const fd = new FormData();
    fd.set("MandatoryDocuments", mandatoryDocuments);
    fd.set("SupportingDocumentts", supportingDocuments);
    await Api.post(`/procurements/${planActivityId}/documents`, fd);
  } catch (e) {
    throw new Error(handleApiError(e));
  }
};
```

Within the component:

```javascript
function MyComponent() {
  const {
    params: { planActivityId },
  } = useRouteMatch();
  const [mandatoryDocuments, setMandatoryDocuments] = useState([]);
  const [supportingDocuments, setSupportingDocuments] = useState([]);
  const [uploadDocuments, { status, error }] = useMutation(
    procurementAPI.uploadDocuments
  );

  const handleSubmit = async () => {
    await uploadDocuments({
      planActivityId,
      mandatoryDocuments,
      setSupportingDocuments,
    });
  };

  // render the page and invoke handleSubmit as normal
  // make sure to handle error state using useAlert
}
```

Of note in particular is the ability to create optimistic UIs, and invalidate queries (causing them to be refetched) from mutations. If the mutation updates a resource that is listed on a page, invalidate the query for that list. Read through the following links if you need that functionality:

- https://react-query.tanstack.com/docs/guides/invalidations-from-mutations
- https://react-query.tanstack.com/docs/guides/updates-from-mutation-responses
- https://react-query.tanstack.com/docs/guides/optimistic-updates

## Notes

You can have more than one `useQuery` or `useMutation` on a page. The documentation describes a way to create dependent requests, and parallel requests are as simple as putting more than one `useQuery` on the page and naming the variables as appropriate.
When you have more than one query on the page, prefer accessing the return value of `useQuery` as an object instead, e.g.:

```javascript
const procurementQuery = useQuery(key1, fetcherFunction1);
const contractQuery = useQuery(key2, fetcherFunction2);

// then access it as procurementQuery, etc
```
