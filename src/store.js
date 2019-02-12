import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from "redux-saga";

import patientDataReducer from "./reducers/patientDataReducer";
import apiReducer from "./reducers/apiReducer";
import pageReducer from "./reducers/pageReducer";
import apiPdvDataReducer from "pdv-patient-data/lib/reducers/apiPdvDataReducer";

import apiSaga from "./sagas/apiSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({patientDataReducer, apiReducer, pageReducer, apiPdvDataReducer}), 
    {}, 
    applyMiddleware(createLogger(), sagaMiddleware)
); 

sagaMiddleware.run(apiSaga);