import React from 'react';
import cls from './SearchBox.scss';

const SearchBox = ({ term, data, update }) => {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        // const filter = data.filter(user => {
        //     return user.title.toLowerCase().includes(value);
        // });
        update({
            term: value,
        });
    };

    return (
        <div className={cls.SearchBox}>
            <input
                type="text"
                value={term}
                onChange={dataSearch}
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchBox;
