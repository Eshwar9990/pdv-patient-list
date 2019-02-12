'use strict';

var _patientDataActions = require('../../actions/patientDataActions');

var _patientDataActions2 = _interopRequireDefault(_patientDataActions);

var _actionTypes = require('../../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('patientDataActions', function () {
    it('should create an action to set active page', function () {
        var patientData = {
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
        };
        var expectedAction = {
            type: _actionTypes.CHANGE_DATA,
            payload: patientData
        };
        expect(_patientDataActions2.default.changePatientData(patientData)).toEqual(expectedAction);
    });
});