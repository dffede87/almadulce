import React, {useState} from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);  

  return (
    <>
       <h3>Mi primer componente {numero}</h3>
    </>
  );
}

export default Contador;