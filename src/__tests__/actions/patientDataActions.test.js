import patientDataActions from '../../actions/patientDataActions';
import { CHANGE_DATA } from '../../actionTypes/actionTypes';

describe('patientDataActions', () => {
    it('should create an action to set active page', () => {
        const patientData = {
            "id": 13,
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
        const expectedAction = {
            type: CHANGE_DATA,
            payload: patientData
        };
        expect(patientDataActions.changePatientData(patientData)).toEqual(expectedAction);
    });
});