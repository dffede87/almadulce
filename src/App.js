import React from "react";
import NavBar from "./Components/NavBar";
import Contador from "./Components/Contador";
import ItemListContainer from "./Components/ItemListContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo={"Bienvenido/a a nuestra tienda online"} />
      <Contador />
    </>
  );
}