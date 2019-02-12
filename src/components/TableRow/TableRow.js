import React from 'react';

// Table newly pushed record with Edit and Delete icons
export const TableRow = (props) => {
    return (
        <tr key={props.i}>
            <td>{props.i + 1}</td>
            <td>{props.patientName}</td>
            <td>
                <span onClick={() => props.patientDataView(props.i)}>
                    <i className="fas fa-edit hover action-icon"></i>
                </span>
                <span onClick={() => props.onPatientDelete(props.i)}>
                    <i className="fas fa-trash hover action-icon"></i>
                </span>
            </td>
        </tr>
    );
};