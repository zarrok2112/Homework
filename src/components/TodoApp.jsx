import React, {useReducer} from 'react';
import { TodoList, TodoAdd, TodoReducer} from './Todo';
import {useTodo} from '../hooks';

const initialState = []


const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
	
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, counters} = useTodo (TodoReducer, initialState, init)

	return (
		<>
			<h1>
				TodoApp: {counters.countTodos}, <small> Pendientes: {counters.countPendingTodos}</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList todos = { todos } onDeleteTodo  = { handleDeleteTodo }
					onToggleTodo = { handleToggleTodo } />
				</div>
				<div className='col-5'>
					<h4> Agregar Todo </h4>
					<hr />
					<TodoAdd onNewTodo = { handleNewTodo } />
				</div>
			</div>
		</>
	);
};
