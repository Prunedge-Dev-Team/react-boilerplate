# React-MUI-Rest-Quickstart-Boilerplate

This is a starter project for React.js apps bootstrapped with create-react-app and has the following libraries in `Technologies` section already added.

## Technologies​

- [React](https://reactjs.org)
- [Material-ui](https://mui.com/): Default Design System.
- [Emotion Styled Components](https://emotion.sh/docs/styled): Default Css-in-js styling system for Material-ui.
- [Axios](https://github.com/axios/axios): For making HTTP requests.
- [React Query](https://react-query.tanstack.com): For server-side state management.
- [React Router DOM](https://reactrouter.com/web/guides/quick-start): Basic App routing has been setup using this.

## Project Setup

The folder structure of the src directory of the project is as follows:<br/>

- `assets`: This folder can contain the images and any other assets like svg files used in our application.
- `reusables`: This can contain all global reusable components in the app.
- `routes`: This folder contains the configurations for routing and user authorization with react-router-dom.
- `utils` : This folder contains all globally used utils.
- `components` : This folder contains most of the non-resuable or page components used within the application.
- `pages` : This folder contains all page views.
- `services`: This file contains all api calls made from this module.
- `context`: This folder contains context providers.

**N/B**

- A `Css.js` file is present in the src directory of the project. It should house all global and reusable style configurations.e.g primary-colors, default fonts, etc.
- Instruction.js files are present in every folder and comments at the top of each major file to give documentation about the make up of the file of folder.

## API Integration Architecture​

The steps detailing the api integration workflow can be found in [Guidelines for API Integration](API_INTEGRATION.md). These guidelines mostly apply to the older version of React Query but a lot of concepts still apply. You can reference the docs at https://react-query.tanstack.com/overview for updated concepts. You might also find this article helpful https://www.audreyhal.com/blog/server-state-management-with-react-query for the newer version.

An example of the api integration workflow is provided in (IntegrationExample.js)[src\pages\IntegrationExample.js]. You can access it on the browser at http://localhost:3000/integration-example

## Getting started

To use this starter project, scroll to the top of this page and find the `Use this template` button
![image](https://user-images.githubusercontent.com/37719470/111035156-66485f80-8419-11eb-964f-f6ceca0840c0.png)

Clicking on it will prompt you to create a new repo that will include all the content of this starter project.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributing

Feel like contributing to this project? We have a [contributing guide](./CONTRIBUTING.md) to help guide you.
