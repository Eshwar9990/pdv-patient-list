'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require('../actionTypes/actionTypes');

var pageActions = {
    setActivePage: function setActivePage(pageNo) {
        return {
            type: _actionTypes.SET_ACTIVE_PAGE,
            payload: pageNo
        };
    }
};

exports.default = pageActions;