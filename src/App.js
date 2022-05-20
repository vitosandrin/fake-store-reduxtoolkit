import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { Header } from "./components";
import 'react-loading-skeleton/dist/skeleton.css'


import { HomePage, ProductPage, CartPage } from "./pages";
import theme from "./theme";

const App = () => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/product/:id" exact element={<ProductPage />} />
          <Route path="/cart" exact element={<CartPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
