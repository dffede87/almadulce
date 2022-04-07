import { Button } from "@mui/material";
import React, {useState} from "react";

export default function Lista() {

  const [arrayNumero, setNumero] = useState([1,2,3,4,5]);

  const agregarElemento = () => {
    setNumero([...arrayNumero, arrayNumero.length + 1])
  }

  return (
    <>
      <ul>
        {
          arrayNumero.map((item, index) =>
            <li key={index}>
              {item} - {index}
            </li>     
          )
        }
      </ul>
      <Button variant="contained" color="primary" onClick={agregarElemento}>Agregar</Button>
    </>
  );
}