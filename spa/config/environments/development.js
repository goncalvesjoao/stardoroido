var _ = require('lodash');

function developmentConfig(config) {

  return _.assign({}, config, {
    environment: 'development',

    url: 'http://localhost:9090/stardoroido/',
  });

}

module.exports = developmentConfig;
