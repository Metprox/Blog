import * as actionTypes from './actionTypes';

export const activePostRequest = id => ({
    type: actionTypes.ACTIVE_POST_REQUEST,
    id,
});
export const activePostRequestSuccess = post => ({
    type: actionTypes.ACTIVE_POST_REQUEST_SUCCESS,
    post,
});
export const activePostRequestError = message => ({
    type: actionTypes.ACTIVE_POST_REQUEST_ERROR,
    message,
});
