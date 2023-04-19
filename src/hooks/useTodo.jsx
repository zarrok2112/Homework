import { useReducer, useState, useEffect } from 'react';
import * as types from './types';

export const useTodo = ( TodoReducer, initialState, init ) => {

	const [todos, dispatchTodo] = useReducer(TodoReducer, initialState, init);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        dispatchTodo( action );
    }

	const handleDeleteTodo = ( todo ) => {
        const action = {
            type: types.DELETE_TODO,
            payload: todo
        }
        dispatchTodo( action );
    }

	const handleToggleTodo = ( todoId ) => {
        const action = {
            type: types.TOGGLE_TODO,
            payload: todoId
        }
        dispatchTodo( action );
    }

    const [counters, setCounters] = useState({})

    useEffect(() => {
		setCounters({
			countTodos: todos.length,
			countPendingTodos: todos.filter((todo) => todo.done == false).length,
		})
	}, [todos])

	return { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, counters};
};
