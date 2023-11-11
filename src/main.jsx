import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { NotFound, CreateCharacteristic, CreateCategory } from "./components/index";
import { Register, Login, Home, ProductPanel, ProductList, Gallery, Detail, CreateProduct, AdminPanel, AdminCategoryList } from "./containers/index";

const AdminRoutes = () => (
  <Routes>
    <Route path="/panel" element={<AdminPanel />} />
    <Route path="/category/create" element={<CreateCategory />} />
    <Route path="/category/list" element={<AdminCategoryList />} />
    <Route path="/product/create" element={<CreateProduct />} />
    <Route path="/product/list" element={<ProductList />} />
    <Route path="/characteristic/create" element={<CreateCharacteristic />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search/products" element={<ProductPanel />} />
          <Route path="/product/detail/:id" element={<Detail/>} />
          <Route path="/product/gallery/:id" element={<Gallery />} />
          <Route path="/admin" element={<AdminRoutes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<NotFound code="404" text="Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

