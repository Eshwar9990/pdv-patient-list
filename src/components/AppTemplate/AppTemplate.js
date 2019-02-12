import React from 'react';

export const AppTemplate = (props) => {
    return (
        <div>
            <table id="patient-list-table" className="table table-striped pl-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Patient Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.patientListTemplates}
                </tbody>
            </table>
        </div>
    );
};