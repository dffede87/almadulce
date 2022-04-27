import React from "react"
import ItemCount from "./ItemCount";
import s from "./ItemDetail.module.css"

export default function ItemDetail({ producto }) {
  
  return (
    <div className={s.containerDetail}>
        <div>
            <img src={producto.imageId} alt={producto.title} width="400px"/>
        </div>
        <div>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <h3>${producto.price}</h3>
            <p>Stock: {producto.stock} u.</p>
            <ItemCount producto={producto} stock={producto.stock} initial={1} />
        </div>
    </div>
  );
}