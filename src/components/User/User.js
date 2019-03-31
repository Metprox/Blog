import React from 'react';
import cls from './User.scss';

const User = props => {
    const { name, email, website } = props.userId;
    return (
        <div className={cls.User}>
            <h2>
                <strong>Username: </strong>
                {name}
            </h2>
            <p>
                <strong>Addres: </strong>
                {props.userId.address.city}
            </p>
            <p>
                <strong>Email: </strong>
                {email}
            </p>
            <p>
                <strong>Website: </strong>
                {website}
            </p>
        </div>
    );
};

export default User;
