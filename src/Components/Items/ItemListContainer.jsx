import React, { useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";
import productos from "../../utils/productos";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css";

export default function ItemListContainer({ titulo }) {

  const [items, setItems] = useState([])

  useEffect(() => {
    customFetch(2000, productos)
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