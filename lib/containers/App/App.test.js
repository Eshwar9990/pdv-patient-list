'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _enzymeRedux = require('enzyme-redux');

var _reduxTestUtils = require('redux-test-utils');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('example shallowWithStore', function () {
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

	it("should render App component", function () {
		var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_App2.default, null));
	});
});