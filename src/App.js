import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/Items/ItemListContainer";
import ItemDetailContainer from "./Components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Cart from "./Components/Cart";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer titulo={"Bienvenido/a a nuestra tienda online"} />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer titulo={"Bienvenido/a a nuestra tienda online"} />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}