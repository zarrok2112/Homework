import { useState } from "react";

export const useCustomCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return [count, incrementCount];
};

