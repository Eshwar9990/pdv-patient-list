import expect from 'expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { cloneableGenerator } from 'redux-saga/utils';

import apiSaga, { getData, deleteData } from "../../sagas/apiSaga";
import requestTypes from "../../apis/requestTypes";
import { GET_REQUEST_PL, DELETE_REQUEST_PL, RECEIVE_API_DATA } from '../../actionTypes/actionTypes';

describe('apiSaga', () => {
    it("should call apiSaga", () => {
        const generator = apiSaga();

        const result = generator.next({});
        expect(result.value.FORK.args).toEqual([GET_REQUEST_PL, getData]);
    });
});

describe('getData from apiSaga', () => {
    it('Success case', () => {
        const action = {
            type: GET_REQUEST_PL,
            payload: "patients"
        };
        const testLoad = getData(action);
        testLoad.next(requestTypes.get);
        const result = testLoad.next({a: 1});
        expect(result.value.PUT.action).toEqual({ type: RECEIVE_API_DATA, payload: { a: 1 } });
    });
  
    it('Failure case', () => {
        const action = {
            type: GET_REQUEST_PL,
            payload: "pati"
        };
        const testLoad = getData(action);
        testLoad.next(requestTypes.get);
        const result = testLoad.next();
        expect(result.value.PUT.action.payload).toEqual(undefined);
    });
});

describe('deleteData from apiSaga', () => {
    it('Success case', () => {
        const action = {
            type: DELETE_REQUEST_PL,
            payload: "patients/1"
        };
        const testLoad = deleteData(action);
        testLoad.next(requestTypes.delete);
        const result = testLoad.next({a: 1});
        expect(result.value.PUT.action).toEqual({ type: RECEIVE_API_DATA, payload: { a: 1 } });
    });
  
    it('Failure case', () => {
        const action = {
            type: DELETE_REQUEST_PL,
            payload: "pati"
        };
        const testLoad = deleteData(action);
        testLoad.next(requestTypes.delete);
        const result = testLoad.next();
        expect(result.value.PUT.action.payload).toEqual(undefined);
    });
});