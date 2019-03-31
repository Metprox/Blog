import React, { Component, Fragment, lazy } from 'react';
import cls from './ActivePost.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { activePostRequest } from 'Store/actions/activePost';
import Loading from 'Components/Loading/Loading';
import User from 'Components/User/User';
import Comments from 'Components/Comments/Comments';

class ActivePost extends Component {
    state = {
        post: {},
        loading: false,
    };

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.activePostRequest(this.props.match.params.id);
        }
        setTimeout(() => {
            this.setState({
                loading: true,
            });
        }, 500);
    }

    render() {
        const { post, error, userId, comments } = this.props;
        return (
            <div className={cls.wrapper}>
                {!this.state.loading ? (
                    <Loading />
                ) : (
                    <Fragment>
                        <div className={cls.ActivePost}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                        <div className={cls.Flex}>
                            <User userId={userId} />
                            <Comments comment={comments} />
                        </div>
                    </Fragment>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.activePostReducer.post,
        userId: state.usersReducer.userId,
        comments: state.commentsReducer.comments,
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            activePostRequest,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ActivePost);
