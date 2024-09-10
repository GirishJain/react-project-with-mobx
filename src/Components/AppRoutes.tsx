import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import AllProducts from "./AllProducts";
import { ProductView } from "./ProductView";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:productId" element={<ProductView />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
