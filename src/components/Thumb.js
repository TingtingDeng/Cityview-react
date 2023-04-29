import React from 'react';
import css from './Thumb.module.scss'


const Thumb = ({index, setIndex, thumb}) => {
    const updateInfo = (event) => {
        const updatedIndex = event.target.getAttribute(["value"]);
        setIndex(updatedIndex);
    };


    return (
        <div
            className={css.ImgContainer}
            style={{backgroundImage: `url(${thumb}`}}
            onClick={updateInfo}
            value = {index}



        >
            
        </div>
    );
};

export default Thumb;