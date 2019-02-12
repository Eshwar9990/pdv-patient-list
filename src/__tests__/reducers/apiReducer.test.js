import expect from 'expect';

import { RECEIVE_API_DATA } from '../../actionTypes/actionTypes';
import apiReducer from '../../reducers/apiReducer';

describe('apiReducer', () => {
    it('check for RECEIVE_API_DATA', () => {
        const receiveApiAction = {
            type: RECEIVE_API_DATA,
            payload: {
                1: "a"
            }
        };
        const expectedValue = {
            data: {
                1: "a"
            }
        };
        expect(apiReducer(null, receiveApiAction)).toEqual(expectedValue)
    });
});