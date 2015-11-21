var stardoroidoPackageJson = require('../../package.json');

module.exports = {

  appConfig: require('./environments')({
    'name': stardoroidoPackageJson.name,
    'author': stardoroidoPackageJson.author,
    'version': stardoroidoPackageJson.version,
    'repository': stardoroidoPackageJson.repository,
    'description': stardoroidoPackageJson.description,

    baseHref: '/',
  }),

  eslint: true,

  serverPort: 9000,

  mockServerPort: 9090,

  vendorDependencies: Object.keys(stardoroidoPackageJson.dependencies || {}),

};
