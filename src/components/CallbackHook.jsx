import { useState, useCallback, useDebugValue } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
        () => {
            console.log('calling setcounter')
            setCounter( (value) => value +1)
        },
        [],
    )

    return (
        <>
            <div>Callback {counter} </div>

            <ShowIncrement incrementFather={incrementFather}/>
        </>
    )
}