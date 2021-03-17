// This file is used to illustrate how to make a sample API request using React-Query. More Details can be found in API_INTEGRATION.md  
import React from "react";
// import {notification} from 'antd'
// import { Button } from 'antd';
import { useQuery } from "react-query";
import exampleService from "services/exampleService";


function IntegrationExample() {
  const { isLoading, isError, error, data } = useQuery(
    "awardedProcurements",
    exampleService.getAwardedProcurements
  );

//   useEffect(() => {
//   // Displays error notification is api request is unsuccessful
//     if (isError)
//       notification['error']({
//         message: 'Failed to fetch overview data',
//         description: '',
//       });
//   }, [isError, error]);


  return (
    <div>
      {isLoading && <div>Loading....</div>}
      <div><b>Data from API would be displayed below, if successful: </b></div>
      <ul>
        {data?.data.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default IntegrationExample;
