import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { traerProducto } from "../../utils/productos";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer({ titulo }) {
  
  const [producto, setProducto] = useState({})

  const {id} = useParams()

  useEffect(() => {
    traerProducto(id)
        .then((respuesta) => {
            setProducto(respuesta)
        })
        .catch((error) => {
            console.log(error)
        })
  }, [id])

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
}