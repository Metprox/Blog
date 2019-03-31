import { all } from 'redux-saga/effects';
import { watchRequestPosts } from './posts';
import { watchActiveRequestPost } from './activePost';
import { watchUsersRequest } from './users';
import { watchCommentsRequest } from './comments';
// import { watchSearchRequest } from './search';
export default function* rootSaga() {
    yield all([
        watchRequestPosts(),
        watchActiveRequestPost(),
        watchUsersRequest(),
        watchCommentsRequest(),
        // watchSearchRequest(),
    ]);
}
