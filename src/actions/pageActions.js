import { SET_ACTIVE_PAGE } from '../actionTypes/actionTypes';

const pageActions = {
    setActivePage: function(pageNo) {
        return {
            type: SET_ACTIVE_PAGE,
            payload: pageNo
        }
    }
};

export default pageActions;