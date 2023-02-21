import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
    const[inputValue, SetInputValue] = useState('...');

    const onInputChange = (evt) =>{
        SetInputValue(evt.target.value)
    }

    const onSubmit = (evt) =>{
        evt.preventDefault();
        onAddCategory(inputValue);
        SetInputValue('');
    }

    return(
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
            placeholder="Buscar"
            category={inputValue}
            onChange={(event) => onInputChange(event)}
             />
        </form>
    )
}