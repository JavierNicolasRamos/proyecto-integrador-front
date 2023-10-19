import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Gallery from "./Routes/Gallery";
import NewProduct from "./Routes/NewProduct";
import NotFound from "./Routes/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/detail/:id" element={<Detail/>} />
          <Route path="/product/gallery/:id" element={<Gallery />} />
          <Route path="/product/new" element={<NewProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
