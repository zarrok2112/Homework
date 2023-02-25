import { useState } from "react";

const useCustomCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return [count, incrementCount];
};

export default useCustomCounter;