'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const str = 'Hello';
const Hello = () => _react2.default.createElement(
  'span',
  null,
  str,
  ' World'
);
const App = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'div',
    { className: 'xxx' },
    _react2.default.createElement(Hello, { abc: '123' })
  )
);