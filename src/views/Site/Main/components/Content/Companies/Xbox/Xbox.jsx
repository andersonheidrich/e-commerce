import * as Style from "../styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import XboxImg from "./images/xbox.png";

const Xbox = ({ addToCart }) => {
  const products = [
    { id: 25, name: "Produto 1", image: XboxImg, price: 100 },
    { id: 26, name: "Produto 2", image: XboxImg, price: 200 },
    { id: 27, name: "Produto 3", image: XboxImg, price: 300 },
    { id: 28, name: "Produto 4", image: XboxImg, price: 300 },
    { id: 29, name: "Produto 5", image: XboxImg, price: 300 },
    { id: 30, name: "Produto 6", image: XboxImg, price: 300 },
    { id: 31, name: "Produto 7", image: XboxImg, price: 300 },
    { id: 32, name: "Produto 8", image: XboxImg, price: 300 },
    { id: 33, name: "Produto 9", image: XboxImg, price: 300 },
    { id: 34, name: "Produto 10", image: XboxImg, price: 300 },
    { id: 35, name: "Produto 11", image: XboxImg, price: 300 },
    { id: 36, name: "Produto 12", image: XboxImg, price: 300 },
  ];

  return (
    <Style.Container>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="item">
            <div className="item-content">
              <img src={product.image} />
              <span>
                {product.name} - R$ {product.price}
              </span>
            </div>
            <div className="item-actions">
              <Button className="buy" onClick={() => addToCart(product)}>
                ADICIONAR
              </Button>
              <AddIcon className="plus-less" />
              <RemoveIcon className="plus-less" />
            </div>
          </div>
        ))}
      </div>
    </Style.Container>
  );
};

export default Xbox;
