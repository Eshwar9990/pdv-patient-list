"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppTemplate = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppTemplate = exports.AppTemplate = function AppTemplate(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "table",
            { id: "patient-list-table", className: "table table-striped pl-table" },
            _react2.default.createElement(
                "thead",
                null,
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "th",
                        null,
                        "S.No"
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        "Patient Name"
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        "Actions"
                    )
                )
            ),
            _react2.default.createElement(
                "tbody",
                null,
                props.patientListTemplates
            )
        )
    );
};