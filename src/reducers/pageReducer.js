import { SET_ACTIVE_PAGE } from '../actionTypes/actionTypes';

const pageReducer = (state = {
    activePageNo: 1
}, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case SET_ACTIVE_PAGE:
            state = {
                ...state,
                activePageNo: action.payload
            };
            break;
    }
    return state;
};

export default pageReducer;