import React, { useState, useEffect } from "react";
import { traerProductos } from "../../utils/productos";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css";

export default function ItemListContainer({ titulo }) {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    traerProductos(categoryId)
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error))
    .finally(() => {
      setLoading(false)
    })
  }, [categoryId])
  

  return (
    <>
       <h1>{titulo}</h1>
       <div className={s.containerItems} >
          {loading ? <h3>Cargando productos...</h3> : <ItemList productos={items} />}
       </div>
    </>
  );
}