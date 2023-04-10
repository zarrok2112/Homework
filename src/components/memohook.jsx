import React, {useState,useMemo} from "react";
import { useCounter } from "../hooks/UseCounter";
import {Small} from './Small';

const heavyStuff = (interaction) => {
    for( let i = 0; i < interaction; i++){
        console.log('vamos en: ', i)
    }
    return `${interaction} interacciones realizadas`
}

export const MemoHook = () => {
    const {counter, handleAdd} = useCounter(10);

    const memo = useMemo(() => heavyStuff(counter, [ counter ]))

    return(
        <>
            <h1>memo hook <Small value={counter}/></h1>
            <hr/>
            <h4>{ memo }</h4>
            <h4>{ memo }</h4>

            <button
            className="boton_primario"
            onClick={() => handleAdd}
            >
                +1
            </button>
        </>
    )
}
