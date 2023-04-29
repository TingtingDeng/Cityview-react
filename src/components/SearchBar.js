import React, {useEffect, useReducer, useRef, useState} from 'react';
// import ReactDOM from "react-dom/client";
import './consts'
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";
import css from './SearchBar.module.scss'

const SearchBar = ({ setImages, page }) => {

    const [inputValue, setInputValue] = useState(DefaultCity)
    const keywordInputRef = useRef('')

    const submitHandler = (event) => {
        event.preventDefault();
        // alert(`The city you entered was: ${inputValue}`)
        console.log('event---->', event)

    }

    const inputHandler = (event) => {
        console.log('search input handler')
        let newInputValue = event.target.value.trim().toLowerCase();
        event.key === 'Enter' &&
        newInputValue.length > 0 &&
        newInputValue !== inputValue &&
        (() => {
            setInputValue(newInputValue);
        })();
        console.log('newInputValue--->', newInputValue)
    }








    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get(BasicUrl, {
                    params: {
                        query: inputValue,
                        page: page,
                        orientation: 'landscape',
                    },
                    headers: {
                        Authorization: `Client-ID ${AccessKey}`,
                    },
                });

                console.log('response-->', response);
                let {
                    data: { results, total_pages },
                } = response;

                let imageArr = results.map((item) => ({  // wrap object in ()
                    id: item.id,
                    des: item.alt_description,
                    regular: item.urls.regular,
                    thumb: item.urls.thumb,
                    totalPage: item.total_pages,
                }));
                console.log('imageArr--->', imageArr);
                setImages(imageArr)
                // passImgFromSearchBar(imageArr)


            };

            fetchData();

        }catch (err) {
            console.log('fetch error-->', err);
        }

    },[inputValue, page, setImages])

    return (
        <div className={css.SearchBar}>
            <form onSubmit={submitHandler}>
                <input
                    ref = {keywordInputRef}
                    type="text"
                    // value={inputValue}
                    onKeyDown={inputHandler}
                    className={css.InputName}
                    placeholder= 'Type here...'


                />
                <button className={css.Btn}>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;