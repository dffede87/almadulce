import React, {useState, Fragment} from "react";
import Button from '@mui/material/Button'


export default function ItemCount({ stock, initial, onAdd }) {

  let [numero, setNumero] = useState(stock > 0 ? initial : 0);

  const restar = () => {
      numero > initial ? setNumero(numero - 1) : setNumero(numero);
  }

  const aumentar = () => {
      numero < stock ? setNumero(numero + 1) : setNumero(numero);
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
        <Button variant="contained" color="primary" onClick={() => onAdd(numero)}>Agregar al carro</Button>
    </Fragment>
  );
}