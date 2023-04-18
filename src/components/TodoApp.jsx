import React, {useReducer} from 'react';
import { TodoList, TodoAdd, TodoReducer} from './Todo';


const initialState = [
    {
    id: new Date().getTime(),
    description:'Hacer los challengue',
    done:false,
    }
]

export const TodoApp = () => {
    const [todos,dispatch] = useReducer(TodoReducer,initialState)
    
    const handleNewTodo = (todo) => {
        const action = {
          type: '[TODO] ADD TODO',
          payload: todo
        };
      
        dispatch(action);
      };
      

    return(
        <>
        <h1>todoApp: 10 <small>Pendiente: 2</small></h1>
        <hr/>
        
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos}/>
                </div>
                <div className='col-5'>
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
       
        </>
    )
	};
