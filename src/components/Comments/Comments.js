import React from 'react';
import cls from './Comments.scss';
const Comments = props => {
    console.log(props.comment);
    return (
        <div className={cls.Comments}>
            <h2>
                <strong>Comments</strong>
            </h2>
            <div>
                {props.comment.map(comm => {
                    return (
                        <div key={comm.id} className={cls.Item}>
                            <h3>
                                <strong>Title: </strong>
                                {comm.name}
                            </h3>
                            <p>
                                <strong>Email: </strong>
                                {comm.email}
                            </p>
                            <p>
                                <strong>Text: </strong>
                                {comm.body}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Comments;
