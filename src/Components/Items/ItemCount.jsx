import React, {useState, Fragment} from "react";
import Button from '@mui/material/Button'


export default function ItemCount({ stock, initial, onAdd }) {

  const [numero, setNumero] = useState(stock > 0 ? initial : 0);

  const restar = () => {
      numero > initial && setNumero(numero - 1);
  }

  const aumentar = () => {
      numero < stock && setNumero(numero + 1);
  }

  const handleClick = () => {
      onAdd(numero)
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
        <Button variant="contained" color="primary" onClick={handleClick}>Agregar al carro</Button>
    </Fragment>
  );
}