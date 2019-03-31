import React from 'react';
import cls from './Post.scss';

import { NavLink } from 'react-router-dom';

const Post = props => {
    return (
        <div className={cls.Post} onClick={props.selectedId}>
            <NavLink to={`/${props.id}`}>
                <h1>{props.title}</h1>
                <p>{props.body}</p>
            </NavLink>
        </div>
    );
};

export default Post;
