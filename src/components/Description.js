import React from 'react';
import css from './Description.module.scss'


const Description = ({images, index, isLoading}) => {
    return isLoading ? (
        <div>Description Loading</div>
        ) : (
        <div>
            <div className={css.Description}>{index}</div>
        </div>
    );
};

export default Description;