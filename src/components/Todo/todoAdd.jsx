import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {
	
	const [description, setDescription] = useState("");

	const addDescription = (e) => {
		setDescription(e.target.value);
	};

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo( newTodo );

		setDescription('');
    }

	return (
		<>
			<form onSubmit={ (event) => onFormSubmit(event)}>
				<input
					type='text'
					className='form-control'
					value={description}
					onChange={addDescription}
				/>
				<button className='btn btn-outline-primary mt-1'>Agregar</button>
			</form>
		</>
	);
};
