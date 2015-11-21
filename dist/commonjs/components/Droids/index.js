'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Droid = require('./Droid');

var _Droid2 = _interopRequireDefault(_Droid);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var Droids = (function (_React$Component) {
  _inherits(Droids, _React$Component);

  function Droids() {
    _classCallCheck(this, Droids);

    _get(Object.getPrototypeOf(Droids.prototype), 'constructor', this).call(this);
    this.state = { droids: [] };
  }

  _createClass(Droids, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this = this;

      _jquery2['default'].ajax({
        url: _config2['default'].url + 'droids.json',
        dataType: 'json',
        success: function success(data) {
          _this.setState({ droids: data });
        }
      });
    }
  }, {
    key: 'renderDroids',
    value: function renderDroids() {
      var _this2 = this;

      if (!this.state.droids.length) {
        return _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'h2',
            null,
            'These are not the droids you are looking for'
          )
        );
      }

      return this.state.droids.map(function (droid, index) {
        return _react2['default'].createElement(_Droid2['default'], _extends({ key: index, droid: droid }, _this2.props));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'ul',
        { className: 'list-inline' },
        this.renderDroids()
      );
    }
  }]);

  return Droids;
})(_react2['default'].Component);

exports['default'] = Droids;
module.exports = exports['default'];