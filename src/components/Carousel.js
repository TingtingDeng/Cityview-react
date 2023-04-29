import React from 'react';

import css from './Carousel.module.scss'
import Thumb from "./Thumb";

const Carousel = ({ images, page, setPage, setIndex }) => {

    const prevHandler = () => {
        if (page > 1) {
            const newPage = +page - 1;
            setPage(newPage)
            console.log('newPage:', newPage)
        }

    }

    const nextHandler = () => {
        if (page < images[0].totalPage) {
            const newPage = +page + 1;
            setPage(newPage)
            console.log('newPage:', newPage)
        }

    }


    return (
        <div className={css.Carousel}>
           <div className={css.Gallery}>
               {
                   images.map((item, index) =>
                       <Thumb
                           key={item.id}
                           thumb={item.thumb}
                           index={index}
                           setIndex={setIndex}
                       />

                   )
               }
           </div>

           <div className={css.Icon}>

               <button className={css.IconPrev} onClick={prevHandler}>prev</button>
               <button className={css.IconNext} onClick={nextHandler}>next</button>
           </div>
        </div>
    );
};

export default Carousel;