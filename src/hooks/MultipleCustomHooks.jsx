import React from "react";
import useCustomCounter from "../hooks/useCustomCounter";
import Fetch from "./Fetch";

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