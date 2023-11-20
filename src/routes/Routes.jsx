import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound, CreateCharacteristic, CreateCategory } from "../components/index";
import { Register, Login, Home, InstrumentPanel, ProductList, Gallery, Detail, CreateInstrument, AdminPanel, AdminCategoryList } from "../containers/index";
import { App } from "../App";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search/instruments" element={<InstrumentPanel />} />
        <Route path="/product/detail/:id" element={<Detail/>} />
        <Route path="/product/gallery/:id" element={<Gallery />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="admin/category/create" element={<CreateCategory />} />
        <Route path="admin/category/list" element={<AdminCategoryList />} />
        <Route path="admin/instrument/create" element={<CreateInstrument />} />
        <Route path="admin/instrument/list" element={<ProductList />} />
        <Route path="admin/characteristic/create" element={<CreateCharacteristic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound code="404" text="Not Found" />} />
    </Route>
  </Routes>
);
