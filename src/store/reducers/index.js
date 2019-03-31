import { combineReducers } from 'redux';

import { postsReducer } from './posts';
import { activePostReducer } from './activePost';
import { usersReducer } from './users';
import { commentsReducer } from './comments';
// import { searchReducer } from './search';

export default combineReducers({
    postsReducer,
    activePostReducer,
    usersReducer,
    commentsReducer,
    // searchReducer,
});
