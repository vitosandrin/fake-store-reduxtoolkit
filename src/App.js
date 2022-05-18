import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";

import { HomePage, ProductPage, CartPage } from "./pages";

const App = () => {

  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/product/:id" exact element={<ProductPage />} />
        <Route path="/cart" exact element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
