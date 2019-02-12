'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = require('../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var sampleBaseUrl = "http://localhost:8080/api/v1/";

var requestTypes = {
	get: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload) {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							console.log('payload from reqTypes: ', payload.partialUrl);
							return _context.abrupt('return', new Promise(function (resolve, reject) {
								_axios2.default.get(sampleBaseUrl + payload.partialUrl).then(function (res) {
									console.log('Response: ', res);
									resolve(res);
									// resolve(null);
								}).catch(function (err) {
									console.log("Error: ", err);
									reject(err);
								});
							}));

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function get(_x) {
			return _ref.apply(this, arguments);
		}

		return get;
	}(),
	delete: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(payload) {
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							console.log('payload from reqTypes: ', payload.partialUrl);
							return _context2.abrupt('return', new Promise(function (resolve, reject) {
								_axios2.default.delete(sampleBaseUrl + payload.partialUrl).then(function (res) {
									console.log('Response: ', res);
									resolve(res);
									// resolve(null);
								}).catch(function (err) {
									console.log("Error: ", err);
									reject(err);
								});
							}));

						case 2:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function _delete(_x2) {
			return _ref2.apply(this, arguments);
		}

		return _delete;
	}(),
	receiveApiData: function receiveApiData(data) {
		return {
			type: _actionTypes.RECEIVE_API_DATA,
			payload: data
		};
	}
};

exports.default = requestTypes;