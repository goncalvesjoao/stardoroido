'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.setConfig = setConfig;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _componentsDroids = require('./components/Droids');

var _componentsDroids2 = _interopRequireDefault(_componentsDroids);

function setConfig(newConfig) {
  Object.assign(_config2['default'], newConfig);
}

exports.config = _config2['default'];
exports['default'] = _componentsDroids2['default'];