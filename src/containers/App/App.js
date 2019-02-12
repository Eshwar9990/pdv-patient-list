import React, { Component } from 'react';
import {connect} from "react-redux";

import './App.css';
import apiActions from "../../actions/apiActions";
import pageActions from '../../actions/pageActions';
import apiPdvDataActions from 'pdv-patient-data/lib/actions/apiPdvDataActions';
import {Loader} from "../../components/Loader/Loader";
import { TableRow } from '../../components/TableRow/TableRow';
import { AppTemplate } from '../../components/AppTemplate/AppTemplate';

var $ = require('jquery');
var dt = require("datatables.net");

var patientList;

class App extends Component {
	componentDidMount() {
		this.props.get("patients");
		$(document).on( "click", $('.paginate_button'), (event) => {
			if(!isNaN(parseInt(event.target.innerHTML))) {
				this.props.setActivePage(parseInt(event.target.innerHTML));
			}
		});
	}

	componentDidUpdate() {
		console.log('Latest render');
		$('#patient-list-table').DataTable().destroy();
		if(patientList.length > $('#patient-list-table tbody').children().length && $('#patient-list-table tbody').children().length > 0) {
			$('#patient-list-table').find('tbody').append(`<tr>
				<td class="sorting_1">`+ patientList.length +`</td>
				<td>`+ patientList[patientList.length - 1].name +`</td>
				<td>
					<span id="edit-`+ patientList.length +`"><svg class="svg-inline--fa fa-edit fa-w-18 hover action-icon" aria-hidden="true" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg><!-- <i class="fas fa-edit hover action-icon"></i> --></span>
					<span id="delete-`+ patientList.length +`"><svg class="svg-inline--fa fa-trash fa-w-14 hover action-icon" aria-hidden="true" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm415.2 56.7L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32.8 140.7c-.4-6.9 5.1-12.7 12-12.7h358.5c6.8 0 12.3 5.8 11.9 12.7z"></path></svg><!-- <i class="fas fa-trash hover action-icon"></i> --></span>
				</td>
			</tr>`);
			document.getElementById('edit-' + patientList.length).addEventListener("click", () => {
				this.patientDataView(patientList.length - 1);
			});
			document.getElementById('delete-' + patientList.length).addEventListener("click", () => {
				this.onPatientDelete(patientList.length - 1);
			});
		} 
		if(patientList.length === $('#patient-list-table tbody').children().length && $('#patient-list-table tbody').children().length > 0) {
			$('#patient-list-table tbody').children()[$('#patient-list-table tbody').children().length - 1].children[1].innerHTML = patientList[patientList.length - 1].name;
		}
		$('#patient-list-table').DataTable().draw();
		let patientListTable1 = $('#patient-list-table').DataTable();
		patientListTable1.page(this.props.page.activePageNo-1).draw('page');
	}

	// Trigger event to populate fields for editing in pdv-patient-data repo
	patientDataView = (i) => {
		let updateData = {
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
		}
		this.props.changeSubmitValidation(true);
		this.props.setUpdateData(updateData);
	}
	
	onPatientDelete = (index) => {
		this.props.delete("patients/" + patientList[index].id);
	}

	notifTrigger(message) {
		if(this.props.notification) {
			this.props.notification(message);
		}
    }
	
	render() {
        console.log('Props in pdv-patient-list : ', this.props);
		let patientListTemplates = [];
		if(this.props.api) {
			if(this.props.api.data.data && this.props.api.data.data.deleted === true) {
				this.notifTrigger("Successfully deleted");
				this.props.get("patients");		
				return <Loader />
			} else {
				patientList = this.props.api.data.data.fetchData;
				for(let i=0;i<patientList.length;i++) {
					patientListTemplates.push(
						<TableRow 
							i={i} 
							patientName={patientList[i].name} 
							patientDataView={this.patientDataView.bind(this)}
							onPatientDelete={this.onPatientDelete.bind(this)}
						/>
					);
				}
				return <AppTemplate patientListTemplates={patientListTemplates} />;
			}
		} else {
			return <Loader />
		}	
		
	}
}

const mapStateToProps = (state) => {
    return {
		api: state.apiReducer,
		page: state.pageReducer,
		apiPdvData: state.apiPdvDataReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
		get: (partialUrl, ids) => {
            dispatch(apiActions.get(partialUrl, ids));
		},
		delete: (partialUrl, ids) => {
            dispatch(apiActions.delete(partialUrl, ids));
		},
		setActivePage: (pageNo) => {
            dispatch(pageActions.setActivePage(pageNo));
		},
		changeSubmitValidation: (value) => {
            dispatch(apiPdvDataActions.changeSubmitValidation(value));
		},
		setUpdateData: (updateData) => {
			dispatch(apiPdvDataActions.setUpdateData(updateData))
		}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);