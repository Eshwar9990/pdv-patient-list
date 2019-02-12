import expect from 'expect';

import { CHANGE_DATA } from '../../actionTypes/actionTypes';
import patientDataReducer from '../../reducers/patientDataReducer';

describe('pageReducer', () => {
    it('check for CHANGE_DATA', () => {
        const changeDataAction = {
            type: CHANGE_DATA,
            payload: {
                "id": 6,
                "name": "Eshwar",
                "personContacted": null,
                "placeOfService": null,
                "contactType": null,
                "appointmentType": null,
                "billingType": null,
                "intesityType": null,
                "addOnModifier": null,
                "labType": null,
                "outsideFacility": null,
                "ebp_ss1": null,
                "category": null
            }
        };
        const expectedValue = {
            "id": 6,
            "name": "Eshwar",
            "personContacted": null,
            "placeOfService": null,
            "contactType": null,
            "appointmentType": null,
            "billingType": null,
            "intesityType": null,
            "addOnModifier": null,
            "labType": null,
            "outsideFacility": null,
            "ebp_ss1": null,
            "category": null
        };
        expect(patientDataReducer({}, changeDataAction)).toEqual(expectedValue)
    });
});