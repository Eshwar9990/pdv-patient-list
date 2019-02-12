"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getData = getData;
exports.deleteData = deleteData;
exports.default = apiSaga;

var _effects = require("redux-saga/effects");

var _apiActions = require("../actions/apiActions");

var _apiActions2 = _interopRequireDefault(_apiActions);

var _requestTypes = require("../apis/requestTypes");

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _actionTypes = require("../actionTypes/actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getData),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(deleteData),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(apiSaga);

function getData(action) {
	var data;
	return regeneratorRuntime.wrap(function getData$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.call)(_requestTypes2.default.get, action.payload);

				case 2:
					data = _context.sent;
					_context.next = 5;
					return (0, _effects.put)(_apiActions2.default.receiveApiData(data));

				case 5:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this);
}

function deleteData(action) {
	var data;
	return regeneratorRuntime.wrap(function deleteData$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					console.log('Action in apiSaga: ', action);
					_context2.next = 3;
					return (0, _effects.call)(_requestTypes2.default.delete, action.payload);

				case 3:
					data = _context2.sent;
					_context2.next = 6;
					return (0, _effects.put)(_apiActions2.default.receiveApiData(data));

				case 6:
				case "end":
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

function apiSaga() {
	return regeneratorRuntime.wrap(function apiSaga$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.takeLatest)(_actionTypes.GET_REQUEST_PL, getData);

				case 2:
					_context3.next = 4;
					return (0, _effects.takeLatest)(_actionTypes.DELETE_REQUEST_PL, deleteData);

				case 4:
				case "end":
					return _context3.stop();
			}
		}
	}, _marked3, this);
}