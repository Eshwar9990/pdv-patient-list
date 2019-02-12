import expect from 'expect';

import pageReducer from '../../reducers/pageReducer';
import { SET_ACTIVE_PAGE } from '../../actionTypes/actionTypes';

describe('pageReducer', () => {
    it('check for SET_ACTIVE_PAGE', () => {
        const setActivePageAction = {
            type: SET_ACTIVE_PAGE,
            payload: 5
        };
        const expectedValue = {
            activePageNo: 5
        };
        expect(pageReducer({}, setActivePageAction)).toEqual(expectedValue)
    });
});