const rewireReactHotLoader = require('react-app-rewire-hot-loader')

/* config-overrides.js */
module.exports = function override (config, env) {
  console.log(config);
  config = rewireReactHotLoader(config, env)
  return config
}
