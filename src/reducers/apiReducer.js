import { RECEIVE_API_DATA } from '../actionTypes/actionTypes';

const apiReducer = (state = null, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case RECEIVE_API_DATA:
            state = {
                ...state,
                data: action.payload
            };
            break;
    }
    return state;
};

export default apiReducer;