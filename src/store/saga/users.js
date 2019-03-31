import { put, call, takeLatest } from 'redux-saga/effects';
import * as actionTypes from 'Store/actions/actionTypes';
import { usersRequestSuccess, usersRequestError } from 'Store/actions/users';
import axios from 'Root/axios';

export function* usersRequest({ id }) {
    try {
        const response = yield call(axios.get, `/users`);
        let userId = response.data.filter(item => {
            return item.id == id;
        });
        yield put(usersRequestSuccess(...userId, id));
    } catch (error) {
        const message = 'Failed to load post, please try again';
        yield put(usersRequestError(message));
    }
}
export function* watchUsersRequest() {
    yield takeLatest(actionTypes.USERS_REQUEST, usersRequest);
}
