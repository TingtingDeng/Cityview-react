import React, {useState} from 'react';
import img from './1.png'
import css from './App.module.scss'
import SearchBar from "./components/SearchBar";
import Carousel from "./components/Carousel";
import Description from "./components/Description";



const App = () => {
    const [images, setImages] = useState([])
    const [page, setPage] = useState(2);
    // const passImgFromSearchBar = (imgFromSearchBar) => setImages(imgFromSearchBar)
    const [index, setIndex] = useState(0)
    const isLoading = images.length === 0;

    return (
        <div
            className={css.AppContainer}
            style = {
                    isLoading
                    ?{}
                   : {backgroundImage: `url('${images[index].regular}')`}}
            
        >
            <div className={css.Outer}>
                <SearchBar setImages = {setImages} page = {page}/>



                <Carousel
                    images = {images}
                    setIndex = {setIndex}
                    page = {page}
                    setPage = {setPage}


                />

                <Description
                    images = {images}
                    index = {index}
                    isLoading={isLoading}

                />

            </div>






        </div>
    );
};

export default App;