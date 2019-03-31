import * as actionTypes from 'Store/actions/actionTypes';

const initState = {
    userId: [],
    id: null,
    error: null,
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.USERS_REQUEST_SUCCESS:
            return {
                ...state,
                userId: action.userId,
                id: action.id,
            };
        case actionTypes.USERS_REQUEST_ERROR:
            return {
                ...state,
                error: action.message,
            };
        default:
            return state;
    }
};
