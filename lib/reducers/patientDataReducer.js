"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require("../actionTypes/actionTypes");

var patientDataReducer = function patientDataReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
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
    };
    var action = arguments[1];

    // eslint-disable-next-line default-case
    switch (action.type) {
        case _actionTypes.CHANGE_DATA:
            state = _extends({}, state);
            Object.assign(state, action.payload);
            break;
    }
    return state;
};

exports.default = patientDataReducer;