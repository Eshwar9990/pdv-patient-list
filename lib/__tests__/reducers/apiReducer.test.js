'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _actionTypes = require('../../actionTypes/actionTypes');

var _apiReducer = require('../../reducers/apiReducer');

var _apiReducer2 = _interopRequireDefault(_apiReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('apiReducer', function () {
    it('check for RECEIVE_API_DATA', function () {
        var receiveApiAction = {
            type: _actionTypes.RECEIVE_API_DATA,
            payload: {
                1: "a"
            }
        };
        var expectedValue = {
            data: {
                1: "a"
            }
        };
        (0, _expect2.default)((0, _apiReducer2.default)(null, receiveApiAction)).toEqual(expectedValue);
    });
});