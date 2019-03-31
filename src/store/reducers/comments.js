import * as actionTypes from 'Store/actions/actionTypes';

const initState = {
    comments: [],
    error: null,
};

export const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.COMMENTS_REQUEST_SUCCESS:
            return {
                ...state,
                comments: action.comments,
            };
        case actionTypes.COMMENTS_REQUEST_ERROR:
            return {
                ...state,
                error: action.message,
            };
        default:
            return state;
    }
};
