import { Button } from "@mui/material";
import React, { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import s from "./ItemDetail.module.css"

export default function ItemDetail({ producto }) {

    const [number, setNumber] = useState(0)

    function onAdd(cant) {
        if (cant > 0) {
          setNumber(cant);
        }
    }
  
  return (
    <div className={s.containerDetail}>
        <div>
            <img src={producto.imagen} alt={producto.nombre} width="400px"/>
        </div>
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <h3>${producto.precio}</h3>
            {
              number === 0 ? <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} /> : <Link to='/Cart' style={{textDecoration: 'none'}}><Button variant="contained" color="primary">Ir al carrito</Button></Link>
            }   
        </div>
    </div>
  );
}