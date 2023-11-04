import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Gallery from "./Routes/Gallery";
import CreateProduct from "./Routes/CreateProduct";
import NotFound from "./Routes/NotFound";
import AdminPanel from "./Routes/AdminPanel";
import { Register } from "./Routes/Register";
import { Login } from "./Routes/Login";
import ProductList from "./Routes/ProductList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/detail/:id" element={<Detail/>} />
          <Route path="/product/gallery/:id" element={<Gallery />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/product/list" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
