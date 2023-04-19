export const TodoReducer = ( initialState, action ) => {
    switch (action.type) {
        case '[TODO] ADD TODO':
            return [...initialState, action.payload]
            break;
        case '[TODO] DELETE TODO':
            return initialState.filter( todo => todo.id !== action.payload )
            break;
        case '[TODO] TOGGLE TODO':
            return initialState.map( todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo )
        default:
            return initialState;
    }
}