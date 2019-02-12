'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _pageReducer = require('../../reducers/pageReducer');

var _pageReducer2 = _interopRequireDefault(_pageReducer);

var _actionTypes = require('../../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('pageReducer', function () {
    it('check for SET_ACTIVE_PAGE', function () {
        var setActivePageAction = {
            type: _actionTypes.SET_ACTIVE_PAGE,
            payload: 5
        };
        var expectedValue = {
            activePageNo: 5
        };
        (0, _expect2.default)((0, _pageReducer2.default)({}, setActivePageAction)).toEqual(expectedValue);
    });
});