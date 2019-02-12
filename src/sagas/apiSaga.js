import { call, put, takeLatest } from "redux-saga/effects";

import apiActions from "../actions/apiActions";
import requestTypes from "../apis/requestTypes";
import { GET_REQUEST_PL_FAILED, DELETE_REQUEST_PL_FAILED, GET_REQUEST_PL, DELETE_REQUEST_PL } from '../actionTypes/actionTypes';

export function* getData(action) {
	const data = yield call(requestTypes.get, action.payload);
	yield put(apiActions.receiveApiData(data));
}

export function* deleteData(action) {
	console.log('Action in apiSaga: ', action);
	const data = yield call(requestTypes.delete, action.payload);
	yield put(apiActions.receiveApiData(data));
}

export default function* apiSaga() {
	// For Axios
	yield takeLatest(GET_REQUEST_PL, getData);
	yield takeLatest(DELETE_REQUEST_PL, deleteData);
}