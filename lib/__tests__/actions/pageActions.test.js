'use strict';

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _pageActions = require('../../actions/pageActions');

var _pageActions2 = _interopRequireDefault(_pageActions);

var _actionTypes = require('../../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('pageActions', function () {
    it('should create an action to set active page', function () {
        var pageNo = 4;
        var expectedAction = {
            type: _actionTypes.SET_ACTIVE_PAGE,
            payload: pageNo
        };
        expect(_pageActions2.default.setActivePage(pageNo)).toEqual(expectedAction);
    });
});