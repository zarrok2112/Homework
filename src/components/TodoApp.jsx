import React from 'react'
import { useReduce } from 'react'
import { TodoReducer } from './TodoReducer'

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

/*export const TodoApp = () => {
    const [todos, dispatchTodo] = useReduce(TodoReducer, initialState)

    return (
        <>
            <h1>TodoApp</h1>
            <hr/>
        </>
    )
}*/
export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState)

    return (
        <>
            <h1>TodoApp: 10, <small> Pnedientes: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className='list-group'>
                        <li className='list-group-item d-flex justify-content-between'>
                            <span className='align-self-center'> Item 1 </span>
                            <button className='btn btn-danger'></button>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4> Agregar TODO </h4>
                    <hr />
                    <form>
                        <input type="text" className='form-control'/>
                        <button className='btn btn-outline-primary mt-1'>
                            Agregar
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}