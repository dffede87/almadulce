import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { traerProducto } from "../../utils/productos";

export default function ItemDetailContainer({ titulo }) {
  
  const [producto, setProducto] = useState({})

  useEffect(() => {
    traerProducto().then((respuesta) => {
      setProducto(respuesta)
    })
  }, [])

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
}