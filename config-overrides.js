// const rewireReactHotLoader = require("react-app-rewire-hot-loader");
// const rewireAliases = require("react-app-rewire-aliases");
// const { paths } = require("react-app-rewired");
// /* config-overrides.js */
// console.log("rewired");
module.exports = function override(config, env) {
  // const path = require("path");
  // // config.resolve.alias["react-dom"] = "@hot-loader/react-dom";
  // // console.log(config);
  // // config = rewireReactHotLoader(config, env);
  // config = rewireAliases.aliasesOptions({
  //   "@components": path.resolve(__dirname, `src/components/`)
  // })(config, env);
  return config;
};
/*
const rewireAliases = require('react-app-rewire-aliases');
resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
}*/
