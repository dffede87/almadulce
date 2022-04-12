import React, { useState, useEffect } from "react";
import { traerProductos } from "../../utils/productos";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css";

export default function ItemListContainer({ titulo }) {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    traerProductos()
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error))
    .finally(() => {
      setLoading(false)
    })
  }, [items])
  

  return (
    <>
       <h1>{titulo}</h1>
       <div className={s.containerItems} >
          {loading ? <h2>Cargando productos...</h2> : <ItemList productos={items} />}
       </div>
    </>
  );
}