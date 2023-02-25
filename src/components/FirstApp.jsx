import { useState } from "react";
import reactLogo from "../assets/logo.gif";
import "../App.css";
import { useCounter } from "../hooks/UseCounter";

export const FirstApp = ({ value = 100 }) => {
  const { counter, handleAdd, handleSubstract, handlereset } =
    useCounter(value);

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>
        <span> {counter} </span>
      </h1>

      <h2>
        <div>
          <button onClick={() => handleAdd()}> +1</button>
          <button onClick={() => handlereset()}> reset </button>
          <button onClick={() => handleSubstract()}>-1</button>
        </div>
      </h2>
    </>
  );
};
