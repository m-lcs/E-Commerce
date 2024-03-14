import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Oeuvre from "../components/oeuvre";
import NavBar from "../components/navBar";
import Detail from "../components/detail";
import Panier from "../components/panier";
import { CartProvider } from "react-use-cart";

function App() {
  const [count, setCount] = useState(0);
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Oeuvre />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="panier" element={<Panier />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
