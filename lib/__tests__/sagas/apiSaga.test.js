'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = require('axios-mock-adapter');

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

var _utils = require('redux-saga/utils');

var _apiSaga = require('../../sagas/apiSaga');

var _apiSaga2 = _interopRequireDefault(_apiSaga);

var _requestTypes = require('../../apis/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _actionTypes = require('../../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('apiSaga', function () {
    it("should call apiSaga", function () {
        var generator = (0, _apiSaga2.default)();

        var result = generator.next({});
        (0, _expect2.default)(result.value.FORK.args).toEqual([_actionTypes.GET_REQUEST_PL, _apiSaga.getData]);
    });
});

describe('getData from apiSaga', function () {
    it('Success case', function () {
        var action = {
            type: _actionTypes.GET_REQUEST_PL,
            payload: "patients"
        };
        var testLoad = (0, _apiSaga.getData)(action);
        testLoad.next(_requestTypes2.default.get);
        var result = testLoad.next({ a: 1 });
        (0, _expect2.default)(result.value.PUT.action).toEqual({ type: _actionTypes.RECEIVE_API_DATA, payload: { a: 1 } });
    });

    it('Failure case', function () {
        var action = {
            type: _actionTypes.GET_REQUEST_PL,
            payload: "pati"
        };
        var testLoad = (0, _apiSaga.getData)(action);
        testLoad.next(_requestTypes2.default.get);
        var result = testLoad.next();
        (0, _expect2.default)(result.value.PUT.action.payload).toEqual(undefined);
    });
});

describe('deleteData from apiSaga', function () {
    it('Success case', function () {
        var action = {
            type: _actionTypes.DELETE_REQUEST_PL,
            payload: "patients/1"
        };
        var testLoad = (0, _apiSaga.deleteData)(action);
        testLoad.next(_requestTypes2.default.delete);
        var result = testLoad.next({ a: 1 });
        (0, _expect2.default)(result.value.PUT.action).toEqual({ type: _actionTypes.RECEIVE_API_DATA, payload: { a: 1 } });
    });

    it('Failure case', function () {
        var action = {
            type: _actionTypes.DELETE_REQUEST_PL,
            payload: "pati"
        };
        var testLoad = (0, _apiSaga.deleteData)(action);
        testLoad.next(_requestTypes2.default.delete);
        var result = testLoad.next();
        (0, _expect2.default)(result.value.PUT.action.payload).toEqual(undefined);
    });
});