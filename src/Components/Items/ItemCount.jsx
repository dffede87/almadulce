import React, { useState, Fragment, useContext } from "react";
import Button from '@mui/material/Button'
import { CartContext } from "../CartContext";

export default function ItemCount({ producto, stock, initial }) {

  const { addToCart } = useContext(CartContext)

  const [numero, setNumero] = useState(stock === 0 ? 0 : initial);

  const restar = () => {
      numero > initial && setNumero(numero - 1);
  }

  const aumentar = () => {
      numero < stock && setNumero(numero + 1);
  }

  return (
    <Fragment>
        <Button variant="contained" color="secondary" onClick={restar}>
          -
        </Button>
        <span>  <strong>{numero}</strong>  </span>
        <Button variant="contained" color="primary" onClick={aumentar}>
          +
        </Button>
        <br />
        <br />
        <Button variant="contained" color="primary" 
          onClick={() => {
            const subtotal = producto.precio * numero;
            addToCart({ ...producto, numero, subtotal })
            setNumero(stock === 0 ? 0 : initial)
          }}
        >
          Agregar al carro
        </Button>
    </Fragment>
  );
}