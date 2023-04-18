import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {
  const [description, setDescription] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(newTodo);

    // Reset the description field
    setDescription("");
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Tarea"
          className="form-control"
          value={description}
          onChange={onDescriptionChange}
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};
