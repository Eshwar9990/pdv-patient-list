'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _actionTypes = require('../../actionTypes/actionTypes');

var _patientDataReducer = require('../../reducers/patientDataReducer');

var _patientDataReducer2 = _interopRequireDefault(_patientDataReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('pageReducer', function () {
    it('check for CHANGE_DATA', function () {
        var changeDataAction = {
            type: _actionTypes.CHANGE_DATA,
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
        var expectedValue = {
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
        (0, _expect2.default)((0, _patientDataReducer2.default)({}, changeDataAction)).toEqual(expectedValue);
    });
});