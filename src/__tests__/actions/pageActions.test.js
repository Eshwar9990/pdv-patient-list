import store from "../../store";
import pageActions from '../../actions/pageActions';
import { SET_ACTIVE_PAGE } from '../../actionTypes/actionTypes';

describe('pageActions', () => {
    it('should create an action to set active page', () => {
        const pageNo = 4;
        const expectedAction = {
            type: SET_ACTIVE_PAGE,
            payload: pageNo
        };
        expect(pageActions.setActivePage(pageNo)).toEqual(expectedAction);
    });
});