import React, {useState, Fragment} from "react";
import Button from '@mui/material/Button'


export default function Contador() {

  let [numero, setNumero] = useState(0);

  const aumentar = () => {
      setNumero(numero + 1);
  }

  const resetear = () => {
      setNumero(numero = 0);
  }

  return (
    <Fragment>
        <h3>Mi primer componente {numero}</h3>
        <Button variant="contained" color="primary" onClick={aumentar}>
          Aumentar
        </Button>
        <Button variant="contained" color="secondary" onClick={resetear}>
          Resetear
        </Button>
    </Fragment>
  );
}