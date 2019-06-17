const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const rewireAliases = require("react-app-rewire-aliases");

/* config-overrides.js */
module.exports = function override(config, env) {
  console.log(config);
  config.resolve.alias["react-dom"] = "@hot-loader/react-dom";

  config = rewireReactHotLoader(config, env);

  return config;
};
/*
const rewireAliases = require('react-app-rewire-aliases');
resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
}*/
