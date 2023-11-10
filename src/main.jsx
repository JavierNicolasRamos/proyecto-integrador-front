import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { App } from "./App";
import { Home } from "./Routes/Home";
import { Detail } from "./Routes/Detail";
import { Gallery } from "./Routes/Gallery";
import { CreateProduct } from "./Routes/CreateProduct";
import { NotFound } from "./Routes/NotFound";
import { Register } from "./Routes/Register";
import { Login } from "./Routes/Login";
import { ProductList } from "./Routes/ProductList";
import { AdminPanel } from "./Routes/AdminPanel";
import { CreateCategory } from "./Routes/CreateCategory";
import { AdminCategoryList } from "./Routes/AdminCategoryList";
import { CreateCharacteristic } from "./Routes/CreateCharacteristic";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/detail/:id" element={<Detail/>} />
          <Route path="/product/gallery/:id" element={<Gallery />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route path="/admin/category/create" element={<CreateCategory />} />
          <Route path="/admin/category/list" element={<AdminCategoryList />} />
          <Route path="/admin/product/create" element={<CreateProduct />} />
          <Route path="/admin/product/list" element={<ProductList />} />
          <Route path="/admin/characteristic/create" element={<CreateCharacteristic />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<NotFound code="404" text="Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
