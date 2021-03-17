# Contributing

​
This file contains a set of guidelines to follow for making contributions to this project.
​

## Coding Practices

​
We enjoy writing and reading code that is consistent, maintainable and follows [best practices](https://github.com/airbnb/javascript).
​

### Code Documentation

​
Ensure to properly document parts of code as needed with the following in mind:
​

- Update the readme.md and any other document in the project, `once you make a change that isn't represented in the related documentation`.
- Give meaningful names to your variables and functions. Avoid abbreviations as much as possible.
- Add comments to properly describe a block code, if required. As a rule of thumb, ask yourself if you think another party would be able to `easily understand` the block of code without needing a comment.
- Add instructions as comments at the top of a component file to properly describe the function of that component and usage within its modules.
- Document each utility function appropriately. This can be done by adding comment at the beginning of the function block.
- Declare props-types on any component that receives props.

​
​

### Prop-Types

​
This project uses [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) for type-checking component props. Ensure to declare prop-types for every component that requires props to be passed.
​

​

### React Components

​
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
​

- A component should be represented in its own file. Function blocks can be created within the component file to split code further into blocks having a single responsibility.
  ​
  ​
- Wrap each component with [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) higher order component. e.g
  ​

```javascript
export default React.memo(AssessmentTable);
```

​

- Components styles should be declared using [MakeStyles](https://material-ui.com/styles/basics/) css-in-js solution. Also avoid inline style declarations as much as possible.
  ​

## Making a Pull Request?

​
Pull requests need only the approval of another collaborators to be merged. Properly fill out the auto generated PR template with details necessary to review the pull request.
​

### Steps to PR

​

- Clone the e-procurement repository.
- Create a new branch out of the `develop` branch. We follow the convention
  `[type/scope]`. For example `feature/create-accordion-hook-component`, `fix/remove-redundant-code`
  ​
  - `type` can be either `fix`, `feature`, or any other
    conventional commit type
  - `scope` is just a short id that describes the scope of work.
    ​

### Commit Convention

​
Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.
​
When you create a commit we kindly ask you to follow the convention below:
​

- choose commit messages that clearly describe the scope of work in a clear and concise way.
  ​
- have your commit messages in `lower case`. e.g `configure axios mock adapter`
