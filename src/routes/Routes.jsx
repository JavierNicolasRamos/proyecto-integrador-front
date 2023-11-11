import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound, CreateCharacteristic, CreateCategory } from "../components/index";
import { Register, Login, Home, ProductPanel, ProductList, Gallery, Detail, CreateProduct, AdminPanel, AdminCategoryList } from "../containers/index";
import { App } from "../App";

export const AdminRoutes = () => (
  <Routes>
    <Route path="/panel" element={<AdminPanel />} />
    <Route path="/category/create" element={<CreateCategory />} />
    <Route path="/category/list" element={<AdminCategoryList />} />
    <Route path="/product/create" element={<CreateProduct />} />
    <Route path="/product/list" element={<ProductList />} />
    <Route path="/characteristic/create" element={<CreateCharacteristic />} />
  </Routes>
);

export const AppRoutes = () => (
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
);
