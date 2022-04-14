import React from "react"
import ItemCount from "./ItemCount";
import s from "./ItemDetail.module.css"

export default function ItemDetail({ producto }) {

    function onAdd(cant) {
        if (cant > 0) {
          alert(cant);
        }
    }  
  
  return (
    <div className={s.containerDetail}>
        <img src={producto.imagen} alt={producto.nombre} width="400px"/>
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <h3>${producto.precio}</h3>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
        </div>
    </div>
  );
}