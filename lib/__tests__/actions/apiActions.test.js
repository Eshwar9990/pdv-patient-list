'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _apiActions = require('../../actions/apiActions');

var _apiActions2 = _interopRequireDefault(_apiActions);

var _actionTypes = require('../../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('apiActions', function () {
    it('should create an action to get request', function () {
        var getPayload = {
            ids: undefined,
            partialUrl: "patients"
        };
        var expectedAction = {
            type: _actionTypes.GET_REQUEST_PL,
            payload: getPayload
        };
        (0, _expect2.default)(_apiActions2.default.get(getPayload.partialUrl, getPayload.ids)).toEqual(expectedAction);
    });

    it('should create an action to put request', function () {
        var putPayload = {
            ids: 111,
            partialUrl: "patients",
            reqBody: { "name": "Balaswamy BS", "addOnModifier": "", "appointmentType": "Telephone", "billingType": "", "category": "Universal", "contactType": "Tele-Medicine", "ebp_ss1": "", "intesityType": "", "labType": "CBC", "outsideFacility": "", "personContacted": "Other", "placeOfService": "Nursing Facility" }
        };
        var expectedAction = {
            type: _actionTypes.PUT_REQUEST_PL,
            payload: putPayload
        };
        (0, _expect2.default)(_apiActions2.default.put(putPayload.partialUrl, putPayload.ids, putPayload.reqBody)).toEqual(expectedAction);
    });

    it('should create an action to delete request', function () {
        var deletePayload = {
            ids: 139,
            partialUrl: "patients"
        };
        var expectedAction = {
            type: _actionTypes.DELETE_REQUEST_PL,
            payload: deletePayload
        };
        (0, _expect2.default)(_apiActions2.default.delete(deletePayload.partialUrl, deletePayload.ids)).toEqual(expectedAction);
    });

    it('should create an action to post request', function () {
        var postPayload = {
            partialUrl: "patients",
            reqBody: { "name": "Post first", "personContacted": "Guardian", "placeOfService": "Residential Program", "contactType": "Indirect", "appointmentType": "", "billingType": "", "intesityType": "", "addOnModifier": "", "labType": "CBC", "outsideFacility": "", "ebp_ss1": "", "category": "" }
        };
        var expectedAction = {
            type: _actionTypes.POST_REQUEST_PL,
            payload: postPayload
        };
        (0, _expect2.default)(_apiActions2.default.post(postPayload.partialUrl, postPayload.reqBody)).toEqual(expectedAction);
    });

    it('should create an action to receiveApiData request', function () {
        var receivePayload = [{ "id": 10, "name": "Post first", "personContacted": "Guardian", "placeOfService": "Residential Program", "contactType": "Indirect", "appointmentType": "", "billingType": "", "intesityType": "", "addOnModifier": "", "labType": "CBC", "outsideFacility": "", "ebp_ss1": "", "category": "" }];
        var expectedAction = {
            type: _actionTypes.RECEIVE_API_DATA,
            payload: receivePayload
        };
        (0, _expect2.default)(_apiActions2.default.receiveApiData(receivePayload)).toEqual(expectedAction);
    });
});