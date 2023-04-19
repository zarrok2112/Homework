import React from "react";
import {useCustomCounter} from "../hooks/useCustomCounter";
import {useFetch} from "./useFetch";

const MultipleCustomHooks = (url) => {
  const [count, incrementCount] = useCustomCounter(0);

  return (
    <div>
      <button onClick={incrementCount}>Incrementar contador</button>
      <Fetch/>
    </div>
  );
};

export default MultipleCustomHooks;