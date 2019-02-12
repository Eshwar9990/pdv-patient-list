'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _patientDataReducer = require('./reducers/patientDataReducer');

var _patientDataReducer2 = _interopRequireDefault(_patientDataReducer);

var _apiReducer = require('./reducers/apiReducer');

var _apiReducer2 = _interopRequireDefault(_apiReducer);

var _pageReducer = require('./reducers/pageReducer');

var _pageReducer2 = _interopRequireDefault(_pageReducer);

var _apiPdvDataReducer = require('pdv-patient-data/lib/reducers/apiPdvDataReducer');

var _apiPdvDataReducer2 = _interopRequireDefault(_apiPdvDataReducer);

var _apiSaga = require('./sagas/apiSaga');

var _apiSaga2 = _interopRequireDefault(_apiSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();

exports.default = (0, _redux.createStore)((0, _redux.combineReducers)({ patientDataReducer: _patientDataReducer2.default, apiReducer: _apiReducer2.default, pageReducer: _pageReducer2.default, apiPdvDataReducer: _apiPdvDataReducer2.default }), {}, (0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)(), sagaMiddleware));


sagaMiddleware.run(_apiSaga2.default);