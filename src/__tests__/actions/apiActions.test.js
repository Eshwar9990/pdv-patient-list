import expect from 'expect';

import apiActions from '../../actions/apiActions';
import { GET_REQUEST_PL, PUT_REQUEST_PL, DELETE_REQUEST_PL, POST_REQUEST_PL, RECEIVE_API_DATA } from '../../actionTypes/actionTypes';

describe('apiActions', () => {
    it('should create an action to get request', () => {
        const getPayload = {
            ids: undefined,
            partialUrl: "patients"
        };
        const expectedAction = {
            type: GET_REQUEST_PL,
            payload: getPayload
        };
        expect(apiActions.get(getPayload.partialUrl, getPayload.ids)).toEqual(expectedAction)
    });

    it('should create an action to put request', () => {
        const putPayload = {
            ids: 111,
            partialUrl: "patients",
            reqBody: {"name":"Balaswamy BS","addOnModifier":"","appointmentType":"Telephone","billingType":"","category":"Universal","contactType":"Tele-Medicine","ebp_ss1":"","intesityType":"","labType":"CBC","outsideFacility":"","personContacted":"Other","placeOfService":"Nursing Facility"}
        };
        const expectedAction = {
            type: PUT_REQUEST_PL,
            payload: putPayload
        };
        expect(apiActions.put(putPayload.partialUrl, putPayload.ids, putPayload.reqBody)).toEqual(expectedAction)
    });

    it('should create an action to delete request', () => {
        const deletePayload = {
            ids: 139,
            partialUrl: "patients"
        };
        const expectedAction = {
            type: DELETE_REQUEST_PL,
            payload: deletePayload
        };
        expect(apiActions.delete(deletePayload.partialUrl, deletePayload.ids)).toEqual(expectedAction)
    });

    it('should create an action to post request', () => {
        const postPayload = {
            partialUrl: "patients",
            reqBody: {"name":"Post first","personContacted":"Guardian","placeOfService":"Residential Program","contactType":"Indirect","appointmentType":"","billingType":"","intesityType":"","addOnModifier":"","labType":"CBC","outsideFacility":"","ebp_ss1":"","category":""}
        };
        const expectedAction = {
            type: POST_REQUEST_PL,
            payload: postPayload
        };
        expect(apiActions.post(postPayload.partialUrl, postPayload.reqBody)).toEqual(expectedAction)
    });

    it('should create an action to receiveApiData request', () => {
        const receivePayload = [{"id": 10, "name":"Post first","personContacted":"Guardian","placeOfService":"Residential Program","contactType":"Indirect","appointmentType":"","billingType":"","intesityType":"","addOnModifier":"","labType":"CBC","outsideFacility":"","ebp_ss1":"","category":""}];
        const expectedAction = {
            type: RECEIVE_API_DATA,
            payload: receivePayload
        };
        expect(apiActions.receiveApiData(receivePayload)).toEqual(expectedAction)
    });
});