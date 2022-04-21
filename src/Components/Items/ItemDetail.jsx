import React from "react"
import ItemCount from "./ItemCount";
import s from "./ItemDetail.module.css"

export default function ItemDetail({ producto }) {
  
  return (
    <div className={s.containerDetail}>
        <div>
            <img src={producto.imagen} alt={producto.nombre} width="400px"/>
        </div>
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <h3>${producto.precio}</h3>
            <p>Stock: {producto.stock} u.</p>
            <ItemCount producto={producto} stock={producto.stock} initial={1} />
        </div>
    </div>
  );
}