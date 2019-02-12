import { GET_REQUEST_PL, PUT_REQUEST_PL, DELETE_REQUEST_PL, POST_REQUEST_PL, RECEIVE_API_DATA } from '../actionTypes/actionTypes';

const apiActions = {
    get: function(partialUrl, ids) {
        return {
            type: GET_REQUEST_PL,
            payload: {
                partialUrl, ids
            }
        }
    },
    put: function(partialUrl, ids, reqBody) {
        return {
            type: PUT_REQUEST_PL,
            payload: {
                partialUrl, ids, reqBody
            }
        }
    },
    delete: function(partialUrl, ids) {
        return {
            type: DELETE_REQUEST_PL,
            payload: {
                partialUrl, ids
            }
        }
    },
    post: function(partialUrl, reqBody) {
        return {
            type: POST_REQUEST_PL,
            payload: {
                partialUrl, reqBody
            }
        }
    },
    receiveApiData: function(data) {
        return {
            type: RECEIVE_API_DATA,
            payload: data
        }
    }
};

export default apiActions;