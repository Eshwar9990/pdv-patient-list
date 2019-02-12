import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import App from "./App";
import { shallow } from 'enzyme';

describe('example shallowWithStore', () => {
	/*const ReactComponent = () => (<div>dummy component</div>);
	describe('state', () => {
		it('works', () => {
			const expectedState = 'expectedState';
			const mapStateToProps = (state) => ({
				state,
			});
			const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
			const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));

			// console.log('dummy Component instance check: ', component.instance())
			// console.log('dummy Component dive check: ', component.dive())

			expect(component.props().state).toBe(expectedState);
		});
	});*/

	/*describe('state', () => {
		it('works', () => {
			const store = createMockStore({
				pageState: {
					activePageNo: 1
				}
			});
			const appInst = shallowWithStore(<App setActivePage={jest.fn()} />, store);
			appInst.dive().instance().componentDidMount();
			// console.log('A', appInst);
			// console.log('B', appInst.instance().selectChildElement("div"));
			// console.log("C", appInst.dive());
		});
	});*/

	it("should render App component", () => {
		const wrapper = shallow(<App />);
	});
});
