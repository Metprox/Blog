import * as actionTypes from 'Store/actions/actionTypes';

const initState = {
    post: {},
    error: null,
};

export const activePostReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ACTIVE_POST_REQUEST_SUCCESS:
            return {
                ...state,
                post: action.post,
            };
        case actionTypes.ACTIVE_POST_REQUEST_ERROR:
            return {
                ...state,
                error: action.message,
            };
        default:
            return state;
    }
};
