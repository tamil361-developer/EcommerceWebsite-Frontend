import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cartCount={cart.length} />
      <div style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
