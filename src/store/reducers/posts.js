import * as actionTypes from 'Store/actions/actionTypes';

const initState = {
    posts: [],
    error: null,
    term: ''
};

export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.POSTS_REQUEST_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                term: action.term
            };
        case actionTypes.POSTS_REQUEST_ERROR:
            return {
                ...state,
                error: action.message
            };
        default:
            return state;
    }
};
