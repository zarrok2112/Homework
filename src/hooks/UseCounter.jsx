import { useState } from "react";

export const useCounter = (value) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handlereset = () => {
    setCounter(value);
  };

  return {
    handleAdd,
    handleSubstract,
    handlereset,
    counter,
  };
};
