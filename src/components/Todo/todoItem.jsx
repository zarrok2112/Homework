export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

	return (
		<>
			<li className='list-group-items d-flex justify-content-between'>
				<span 
				onClick={ () => onToggleTodo( todo.id ) }
				className={`align-self-center w-100 rounded border border-dark m-1 ${todo.done ? 'text-decoration-line-through bg-success' : ''}`}> {todo.description} </span>
				<button 
				className='btn btn-danger'
				onClick={ () => {onDeleteTodo( todo.id )} }> Borrar </button>
			</li>
		</>
	);
};
