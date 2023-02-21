import { useState, useEffect } from 'react';
import {getGifs} from "../helper/getGif"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const images = await getGifs(category);
        setImages(images);
    };

    useEffect(() => {
        getImages();
    },[])


    return{
        images: images,
        isoading: false,
    }
}