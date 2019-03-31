import React, { Component, Fragment } from 'react';
import cls from './Posts.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { usersRequest } from 'Store/actions/users';
import { commentsRequest } from 'Store/actions/comments';
import Post from 'Components/Post/Post';
import Loading from 'Components/Loading/Loading';

class Posts extends Component {
    state = {
        loading: true,
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: true,
            });
        }, 1000);
    }

    handlerSelectedId = id => {
        this.props.usersRequest(id);
        this.props.commentsRequest(id);
    };

    render() {
        return (
            <div className={cls.Posts}>
                {!this.state.loading ? (
                    <Loading />
                ) : (
                    this.props.searchPosts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                {...post}
                                selectedId={() =>
                                    this.handlerSelectedId(post.userId)
                                }
                            />
                        );
                    })
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.usersReducer.userId,
        comments: state.commentsReducer.comments,
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            usersRequest,
            commentsRequest,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Posts);
