import {useState} from "react";
import {AddCategory} from "./AddCategory";
import {GifGrid} from "./Grid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (category) => {
        setCategories(list => [...list, category])
    }

    return(
        <>
        <h1> Gif Expert</h1>

        <AddCategory onAddCategory={onAddCategory}/>
        {
            categories.map(
                (category, key) =>
                {
                    return <GifGrid category={category} key={key}/>
                }
            )
        }
        </>
    )
}