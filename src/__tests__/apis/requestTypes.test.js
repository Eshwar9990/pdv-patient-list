import expect from 'expect';
import axios from 'axios';

import requestTypes from "../../apis/requestTypes";
import MockAdapter from 'axios-mock-adapter';
import { RECEIVE_API_DATA } from '../../actionTypes/actionTypes';

describe('requestTypes', () => {
	var mock = new MockAdapter(axios);
	const data = { response: true };

    it('test for get success axios', done => {
        mock.onGet('http://localhost:8080/api/v1/patients').reply(200, data);

        requestTypes.get({
            partialUrl: "patients"
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        });
	});

	it('test for get failure axios', done => {
        requestTypes.get({
            partialUrl: "patients/abcd"
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        }).catch(error => {
			expect(error.response.status).toEqual(404);
			done();
		});
	});
	
	it('test for delete success axios', done => {
        mock.onDelete('http://localhost:8080/api/v1/patients/17').reply(200, data);

        requestTypes.delete({
            partialUrl: "patients/17"
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        });
	});

	it('test for delete failure axios', done => {
        requestTypes.delete({
            partialUrl: "patients/xyz"
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        }).catch(error => {
			expect(error.response.status).toEqual(404);
			done();
		});
	});
	
	it('should check return of receiveApiData request', () => {
        const receivePayload = { a: 2 };
        const expectedAction = {
            type: RECEIVE_API_DATA,
            payload: receivePayload
        };
        expect(requestTypes.receiveApiData(receivePayload)).toEqual(expectedAction);
    });
});