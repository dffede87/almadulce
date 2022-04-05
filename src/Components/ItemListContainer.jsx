import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer({ titulo }) {

  function onAdd(cant) {
    if (cant > 0) {
      alert(cant);
    }
  }

  return (
    <>
       <h1>{titulo}</h1>
       <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </>
  );
}