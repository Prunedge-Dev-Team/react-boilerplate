/* This file contains configurations to overide ant-design variables. A list of ant-design default variables can be found here: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less */
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "",
      "@font-family": `'Nunito Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
    },
  })
);
