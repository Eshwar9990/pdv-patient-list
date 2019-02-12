'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require('../actionTypes/actionTypes');

var patientDataActions = {
    changePatientData: function changePatientData(patientData) {
        return {
            type: _actionTypes.CHANGE_DATA,
            payload: patientData
        };
    }
};

exports.default = patientDataActions;