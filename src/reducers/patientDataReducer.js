import { CHANGE_DATA } from '../actionTypes/actionTypes';

const patientDataReducer = (state = {
    "id": null,
    "name": null,
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
}, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case CHANGE_DATA:
            state = {
                ...state
            };
            Object.assign(state, action.payload);
            break;
    }
    return state;
};

export default patientDataReducer;