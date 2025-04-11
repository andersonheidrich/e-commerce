import * as Style from "../styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import PSImg from "./images/playstation.png";

const Playstation = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Produto 1", image: PSImg, price: 100 },
    { id: 2, name: "Produto 2", image: PSImg, price: 200 },
    { id: 3, name: "Produto 3", image: PSImg, price: 300 },
    { id: 4, name: "Produto 4", image: PSImg, price: 300 },
    { id: 5, name: "Produto 5", image: PSImg, price: 300 },
    { id: 6, name: "Produto 6", image: PSImg, price: 300 },
    { id: 7, name: "Produto 7", image: PSImg, price: 300 },
    { id: 8, name: "Produto 8", image: PSImg, price: 300 },
    { id: 9, name: "Produto 9", image: PSImg, price: 300 },
    { id: 10, name: "Produto 10", image: PSImg, price: 300 },
    { id: 11, name: "Produto 11", image: PSImg, price: 300 },
    { id: 12, name: "Produto 12", image: PSImg, price: 300 },
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

export default Playstation;
