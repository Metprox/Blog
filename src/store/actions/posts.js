import * as actionTypes from './actionTypes';

export const postsRequest = term => ({
    type: actionTypes.POSTS_REQUEST,
    term,
});
export const postsRequestSuccess = (posts, term) => ({
    type: actionTypes.POSTS_REQUEST_SUCCESS,
    posts,
    term,
});
export const postsRequestError = message => ({
    type: actionTypes.POSTS_REQUEST_ERROR,
    message,
});
