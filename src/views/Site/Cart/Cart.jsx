import React from "react";
import * as Style from "./Cart.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const Cart = ({ cart, removeFromCart, removeAllFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Style.Container>
      <Style.Title>
        <h1>Meu Carrinho:</h1>
      </Style.Title>
      {cart.length === 0 ? (
        <Style.Cart>
          <h3>O carrinho está vazio.</h3>
        </Style.Cart>
      ) : (
        <Style.Cart>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-content">
                <img src={item.image} />
                <span>
                  {item.name} - R${item.price}
                </span>
              </div>
              <DeleteIcon
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}
          <span style={{ marginTop: "8px" }}>Total: R${total}</span>
          <Button
            style={{ marginTop: "16px", color: "white", background: "#d10000" }}
            className="remove-button"
            onClick={() => removeAllFromCart()}
          >
            Esvaziar Carrinho
          </Button>
        </Style.Cart>
      )}
    </Style.Container>
  );
};

export default Cart;

// import React from "react";

// function Cart({ cart, removeFromCart }) {
//   const total = cart.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div>
//       <h2>Carrinho de Compras</h2>
//       {cart.length === 0 ? (
//         <p>O carrinho está vazio.</p>
//       ) : (
//         <div>
//           {cart.map((item, index) => (
//             <div key={index}>
//               <p>{item.name} - R${item.price}</p>
//               <button onClick={() => removeFromCart(item.id)}>Remover</button>
//             </div>
//           ))}
//           <h3>Total: R${total}</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
