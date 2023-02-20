import { useState } from 'react';

export const ComponentApp = () => {
    const [categories,setCategories ]= useState(['First category'])
    const [category,setCategory ] = useState('')

    const onAddCategory = () =>{

        setCategories(list => [...list, category])
        setCategory('')

    }

    const onSetCategory = (evt) => {
        setCategory(evt.target.value)
    }
    
return (
    <>
    <h1>
        GIFExpert
    </h1>
    <ol>
        <form action="OnChange">
        <h2> new Categories</h2>
        <input type="text" value={category} onChange={(event)=> onSetCategory(event)}/>
        <button onClick={() => onAddCategory()} type='button'>add</button>
        </form>
        {
            categories.map(
                (category, key) => 
            {
                return <h3><li key={key}> {category}</li> </h3> 
            }
            )
        }
    </ol>
    </>
)



}
