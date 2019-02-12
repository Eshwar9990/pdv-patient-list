import { CHANGE_DATA } from '../actionTypes/actionTypes';

const patientDataActions = {
    changePatientData: function(patientData) {
        return {
            type: CHANGE_DATA,
            payload: patientData
        }
    }
};

export default patientDataActions;