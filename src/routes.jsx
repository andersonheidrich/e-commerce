import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Cart from "./views/Site/Cart";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
