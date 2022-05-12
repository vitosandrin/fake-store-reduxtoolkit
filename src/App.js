import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";

import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from "./pages/Product";

const App = () => {

  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
