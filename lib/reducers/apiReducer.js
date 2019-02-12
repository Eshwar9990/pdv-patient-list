'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../actionTypes/actionTypes');

var apiReducer = function apiReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    // eslint-disable-next-line default-case
    switch (action.type) {
        case _actionTypes.RECEIVE_API_DATA:
            state = _extends({}, state, {
                data: action.payload
            });
            break;
    }
    return state;
};

exports.default = apiReducer;