'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./App.css');

var _apiActions = require('../../actions/apiActions');

var _apiActions2 = _interopRequireDefault(_apiActions);

var _pageActions = require('../../actions/pageActions');

var _pageActions2 = _interopRequireDefault(_pageActions);

var _apiPdvDataActions = require('pdv-patient-data/lib/actions/apiPdvDataActions');

var _apiPdvDataActions2 = _interopRequireDefault(_apiPdvDataActions);

var _Loader = require('../../components/Loader/Loader');

var _TableRow = require('../../components/TableRow/TableRow');

var _AppTemplate = require('../../components/AppTemplate/AppTemplate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = require('jquery');
var dt = require("datatables.net");

var patientList;

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.patientDataView = function (i) {
			var updateData = {
				id: patientList[i].id,
				name: patientList[i].name,
				addOnModifier: patientList[i].addOnModifier,
				appointmentType: patientList[i].appointmentType,
				billingType: patientList[i].billingType,
				category: patientList[i].category,
				contactType: patientList[i].contactType,
				ebp_ss1: patientList[i].ebp_ss1,
				intesityType: patientList[i].intesityType,
				labType: patientList[i].labType,
				outsideFacility: patientList[i].outsideFacility,
				personContacted: patientList[i].personContacted,
				placeOfService: patientList[i].placeOfService
			};
			_this.props.changeSubmitValidation(true);
			_this.props.setUpdateData(updateData);
		}, _this.onPatientDelete = function (index) {
			_this.props.delete("patients/" + patientList[index].id);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.props.get("patients");
			$(document).on("click", $('.paginate_button'), function (event) {
				if (!isNaN(parseInt(event.target.innerHTML))) {
					_this2.props.setActivePage(parseInt(event.target.innerHTML));
				}
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var _this3 = this;

			console.log('Latest render');
			$('#patient-list-table').DataTable().destroy();
			if (patientList.length > $('#patient-list-table tbody').children().length && $('#patient-list-table tbody').children().length > 0) {
				$('#patient-list-table').find('tbody').append('<tr>\n\t\t\t\t<td class="sorting_1">' + patientList.length + '</td>\n\t\t\t\t<td>' + patientList[patientList.length - 1].name + '</td>\n\t\t\t\t<td>\n\t\t\t\t\t<span id="edit-' + patientList.length + '"><svg class="svg-inline--fa fa-edit fa-w-18 hover action-icon" aria-hidden="true" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg><!-- <i class="fas fa-edit hover action-icon"></i> --></span>\n\t\t\t\t\t<span id="delete-' + patientList.length + '"><svg class="svg-inline--fa fa-trash fa-w-14 hover action-icon" aria-hidden="true" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm415.2 56.7L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32.8 140.7c-.4-6.9 5.1-12.7 12-12.7h358.5c6.8 0 12.3 5.8 11.9 12.7z"></path></svg><!-- <i class="fas fa-trash hover action-icon"></i> --></span>\n\t\t\t\t</td>\n\t\t\t</tr>');
				document.getElementById('edit-' + patientList.length).addEventListener("click", function () {
					_this3.patientDataView(patientList.length - 1);
				});
				document.getElementById('delete-' + patientList.length).addEventListener("click", function () {
					_this3.onPatientDelete(patientList.length - 1);
				});
			}
			if (patientList.length === $('#patient-list-table tbody').children().length && $('#patient-list-table tbody').children().length > 0) {
				$('#patient-list-table tbody').children()[$('#patient-list-table tbody').children().length - 1].children[1].innerHTML = patientList[patientList.length - 1].name;
			}
			$('#patient-list-table').DataTable().draw();
			var patientListTable1 = $('#patient-list-table').DataTable();
			patientListTable1.page(this.props.page.activePageNo - 1).draw('page');
		}

		// Trigger event to populate fields for editing in pdv-patient-data repo

	}, {
		key: 'notifTrigger',
		value: function notifTrigger(message) {
			if (this.props.notification) {
				this.props.notification(message);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			console.log('Props in pdv-patient-list : ', this.props);
			var patientListTemplates = [];
			if (this.props.api) {
				if (this.props.api.data.data && this.props.api.data.data.deleted === true) {
					this.notifTrigger("Successfully deleted");
					this.props.get("patients");
					return _react2.default.createElement(_Loader.Loader, null);
				} else {
					patientList = this.props.api.data.data.fetchData;
					for (var i = 0; i < patientList.length; i++) {
						patientListTemplates.push(_react2.default.createElement(_TableRow.TableRow, {
							i: i,
							patientName: patientList[i].name,
							patientDataView: this.patientDataView.bind(this),
							onPatientDelete: this.onPatientDelete.bind(this)
						}));
					}
					return _react2.default.createElement(_AppTemplate.AppTemplate, { patientListTemplates: patientListTemplates });
				}
			} else {
				return _react2.default.createElement(_Loader.Loader, null);
			}
		}
	}]);

	return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		api: state.apiReducer,
		page: state.pageReducer,
		apiPdvData: state.apiPdvDataReducer
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		get: function get(partialUrl, ids) {
			dispatch(_apiActions2.default.get(partialUrl, ids));
		},
		delete: function _delete(partialUrl, ids) {
			dispatch(_apiActions2.default.delete(partialUrl, ids));
		},
		setActivePage: function setActivePage(pageNo) {
			dispatch(_pageActions2.default.setActivePage(pageNo));
		},
		changeSubmitValidation: function changeSubmitValidation(value) {
			dispatch(_apiPdvDataActions2.default.changeSubmitValidation(value));
		},
		setUpdateData: function setUpdateData(updateData) {
			dispatch(_apiPdvDataActions2.default.setUpdateData(updateData));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);