import * as Style from "../styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import NintendoImg from "./images/1.png";

const Nintendo = ({ addToCart }) => {
  const products = [
    { id: 13, name: "Produto 1", image: NintendoImg, price: 100 },
    { id: 14, name: "Produto 2", image: NintendoImg, price: 200 },
    { id: 15, name: "Produto 3", image: NintendoImg, price: 300 },
    { id: 16, name: "Produto 4", image: NintendoImg, price: 400 },
    { id: 17, name: "Produto 5", image: NintendoImg, price: 500 },
    { id: 18, name: "Produto 6", image: NintendoImg, price: 600 },
    { id: 19, name: "Produto 7", image: NintendoImg, price: 700 },
    { id: 20, name: "Produto 8", image: NintendoImg, price: 800 },
    { id: 21, name: "Produto 9", image: NintendoImg, price: 900 },
    { id: 22, name: "Produto 10", image: NintendoImg, price: 1000 },
    { id: 23, name: "Produto 11", image: NintendoImg, price: 1100 },
    { id: 24, name: "Produto 12", image: NintendoImg, price: 1200 },
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

export default Nintendo;
