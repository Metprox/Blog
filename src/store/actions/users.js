import * as actionTypes from './actionTypes';

export const usersRequest = id => ({
    type: actionTypes.USERS_REQUEST,
    id,
});
export const usersRequestSuccess = (userId, id) => ({
    type: actionTypes.USERS_REQUEST_SUCCESS,
    userId,
    id,
});
export const usersRequestError = message => ({
    type: actionTypes.USERS_REQUEST_ERROR,
    message,
});
