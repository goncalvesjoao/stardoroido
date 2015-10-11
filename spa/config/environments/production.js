var _ = require('lodash');

function productionConfig(config) {

  return _.assign({}, config, {
    environment: 'production',

    baseHref: '/stardoroido/',
  });

}

module.exports = productionConfig;
