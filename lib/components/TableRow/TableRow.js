"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableRow = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = exports.TableRow = function TableRow(props) {
    return _react2.default.createElement(
        "tr",
        { key: props.i },
        _react2.default.createElement(
            "td",
            null,
            props.i + 1
        ),
        _react2.default.createElement(
            "td",
            null,
            props.patientName
        ),
        _react2.default.createElement(
            "td",
            null,
            _react2.default.createElement(
                "span",
                { onClick: function onClick() {
                        return props.patientDataView(props.i);
                    } },
                _react2.default.createElement("i", { className: "fas fa-edit hover action-icon" })
            ),
            _react2.default.createElement(
                "span",
                { onClick: function onClick() {
                        return props.onPatientDelete(props.i);
                    } },
                _react2.default.createElement("i", { className: "fas fa-trash hover action-icon" })
            )
        )
    );
};