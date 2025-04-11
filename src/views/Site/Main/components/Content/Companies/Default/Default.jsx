import * as Style from "./Default.styles";
import Slider from "../../../../../../../components/Slider/Slider";
import PSImg from "./images/playstation.png";
import NintendoImg from "./images/nintendo.png";
import XboxImg from "./images/xbox.png";

const Default = () => {
  const data = [
    {
      id: "1",
      title: "PlayStation",
      image: PSImg,
    },
    {
      id: "2",
      title: "Nintendo",
      image: NintendoImg,
    },
    {
      id: "3",
      title: "Xbox",
      image: XboxImg,
    },
  ];

  return (
    <Style.Container>
      <h1>As melhores marcas do mercado!</h1>
      <Slider data={data} />;
    </Style.Container>
  );
};

export default Default;
