'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../actionTypes/actionTypes');

var pageReducer = function pageReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        activePageNo: 1
    };
    var action = arguments[1];

    // eslint-disable-next-line default-case
    switch (action.type) {
        case _actionTypes.SET_ACTIVE_PAGE:
            state = _extends({}, state, {
                activePageNo: action.payload
            });
            break;
    }
    return state;
};

exports.default = pageReducer;