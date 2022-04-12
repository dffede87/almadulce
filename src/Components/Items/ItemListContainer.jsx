import React, { useState, useEffect } from "react";
import { traerProductos } from "../../utils/productos";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css";

export default function ItemListContainer({ titulo }) {

  const [items, setItems] = useState([])

  useEffect(() => {
    traerProductos()
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error))
  }, [items])
  

  return (
    <>
       <h1>{titulo}</h1>
       <div className={s.containerItems} >
          <ItemList productos={items} />
       </div>
    </>
  );
}