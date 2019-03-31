import * as actionTypes from './actionTypes';

export const commentsRequest = id => ({
    type: actionTypes.COMMENTS_REQUEST,
    id,
});
export const commentsRequestSuccess = (comments) => ({
    type: actionTypes.COMMENTS_REQUEST_SUCCESS,
    comments,
});
export const commentsRequestError = message => ({
    type: actionTypes.COMMENTS_REQUEST_ERROR,
    message,
});
