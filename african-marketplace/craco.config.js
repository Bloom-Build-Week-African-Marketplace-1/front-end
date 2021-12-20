const config = {};
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: config,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
