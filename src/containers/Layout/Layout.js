import React, { Component, lazy, Suspense } from 'react';
import cls from './Layout.scss';
import { Route } from 'react-router-dom';
import Loading from 'Components/Loading/Loading';
import { postsRequest } from 'Store/actions/posts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const SearchBox = lazy(() => import('Components/SearchBox/SearchBox'));
const Posts = lazy(() => import('Containers/Posts/Posts'));
const ActivePost = lazy(() => import('Containers/ActivePost/ActivePost'));

class Layout extends Component {
    componentDidMount() {
        this.props.postsRequest();
    }
    updateData(term) {
        this.props.postsRequest(term.term);
    }

    render() {
        return (
            <div className={cls.Layout}>
                <Suspense fallback={<Loading />}>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <SearchBox
                                term={this.props.term}
                                data={this.props.posts}
                                update={this.updateData.bind(this)}
                            />
                        )}
                    />
                    <Route
                        path="/"
                        exact
                        render={() => <Posts searchPosts={this.props.posts} />}
                    />
                    <Route path="/:id" component={ActivePost} />
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsReducer.posts,
        term: state.postsReducer.term,
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            postsRequest,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Layout);
