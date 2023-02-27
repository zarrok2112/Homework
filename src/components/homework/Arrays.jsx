import React from "react";

export const Arrays = () => {
  const fruits = ["toronja", "naranja", "manzana"];

  console.log("At:", fruits.at(1));
  console.log("Concat:", fruits.concat(["pera", "banana"]));
  console.log("Constructor:", fruits.constructor);
  console.log("CopyWithin:", fruits.copyWithin(1, 2));
  console.log("Entries:", fruits.entries());

  // Para usar findLast() se necesita esta función auxiliar
  Array.prototype.findLast = function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (callback(this[i])) {
        return this[i];
      }
    }
  };

  console.log("Every:", fruits.every((fruit) => fruit.length > 3));
  console.log("Fill:", fruits.fill("mango", 1, 2));
  console.log("Filter:", fruits.filter((fruit) => fruit.includes("n")));
  console.log("FindIndex:", fruits.findIndex((fruit) => fruit === "manzana"));
  console.log("FindLast:", fruits.findLast((fruit) => fruit.length > 6));
  console.log("FindLastIndex:", fruits.findLastIndex((fruit) => fruit === "naranja"));
  console.log("Flat:", ["hello", ["world"]].flat());
  console.log("FlatMap:", fruits.flatMap((fruit) => fruit.toUpperCase()));

  fruits.forEach((fruit) => {
    console.log("ForEach:", fruit);
  });

  console.log("Includes:", fruits.includes("naranja"));
  console.log("IndexOf:", fruits.indexOf("manzana"));
  console.log("Join:", fruits.join(" + "));
  console.log("Keys:", fruits.keys());
  console.log("LastIndexOf:", fruits.lastIndexOf("toronja"));
  console.log("Map:", fruits.map((fruit) => fruit.toUpperCase()));
  console.log("Pop:", fruits.pop());
  console.log("Push:", fruits.push("pera", "banana"));

  const reducedValue = fruits.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, "");

  console.log("Reduce:", reducedValue);

  console.log("ReduceRight:", fruits.reduceRight((accumulator, currentValue) => {
    return accumulator + " " + currentValue;
  }));

  console.log("Reverse:", fruits.reverse());
  console.log("Shift:", fruits.shift());
  console.log("Slice:", fruits.slice(1, 2));
  console.log("Some:", fruits.some((fruit) => fruit.length > 7));
  console.log("Sort:", fruits.sort());
  console.log("Splice:", fruits.splice(1, 1, "mango", "durazno"));
  console.log("toLocaleString:", fruits.toLocaleString());
  console.log("ToString:", fruits.toString());
  console.log("Unshift:", fruits.unshift("papaya"));
  console.log("Values:", fruits.values());

  return null;
};
