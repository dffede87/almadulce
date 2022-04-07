import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/Items/ItemListContainer";
import TestContainer from "./Components/TestContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo={"Bienvenido/a a nuestra tienda online"} />
      <TestContainer />
    </>
  );
}