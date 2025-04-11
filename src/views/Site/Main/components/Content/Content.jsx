import * as Style from "./Content.styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Default, Nintendo, Playstation, Xbox } from "./Companies";
import Cart from "../../../Cart";

const Content = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  return (
    <Style.Container>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route
          path="/playstation"
          element={<Playstation addToCart={addToCart} />}
        />
        <Route path="/nintendo" element={<Nintendo addToCart={addToCart} />} />
        <Route path="/xbox" element={<Xbox addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              removeAllFromCart={removeAllFromCart}
            />
          }
        />
      </Routes>
    </Style.Container>
  );
};

export default Content;
