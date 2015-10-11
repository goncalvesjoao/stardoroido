'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jQuery = require('jquery');
var config = require('../../config');
var Droid = require('./Droid');

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

      jQuery.ajax({
        url: config.url + 'droids.json',
        dataType: 'json',
        success: function success(data) {
          _this.setState({ droids: data });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'ul',
        { className: 'list-inline' },
        this.renderDroids()
      );
    }
  }, {
    key: 'renderDroids',
    value: function renderDroids() {
      var _this2 = this;

      if (!this.state.droids.length) {
        return React.createElement(
          'li',
          null,
          React.createElement(
            'h2',
            null,
            'These are not the droids you are looking for'
          )
        );
      }

      return this.state.droids.map(function (droid, index) {
        return React.createElement(Droid, _extends({ key: index, ref: 'droid_' + droid.id, droid: droid }, _this2.props));
      });
    }
  }]);

  return Droids;
})(React.Component);

module.exports = Droids;