import React from "react";
import { useFetch } from "../hooks/useFetch";

export const Fetch = () => {
  const list = [2,4,6,8,10]
  const { calor,setValor} = useState(url);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error: {hasError.message}</p>;
  }

  // Recorrer las propiedades del objeto data con un bucle for...in
  for (const key in data) {
    // Imprimir el nombre de cada propiedad y su valor correspondiente
    console.log(`${key}:`, data[key]);
  }

  return null;
};

export default Fetch;