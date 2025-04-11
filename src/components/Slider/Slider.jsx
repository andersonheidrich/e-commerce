import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import * as Style from "./Slider.styles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ data }) => {
  return (
    <>
      <Style.SwiperStyle
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        speed={700}
        slideToClickedSlide={true}
        navigation
        pagination={{ el: ".swiper-pagination", clickable: true }}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
      >
        {data.map((slide) => (
          <Style.SlideStyle key={slide.id}>
            <div className="slide-console">
              {/* <h1 className="slide-title">{slide.title}</h1> */}
              <img className="slide-image" src={slide.image} />
            </div>
            {/* <span className="slide-text">{slide.text}</span> */}
          </Style.SlideStyle>
        ))}
      </Style.SwiperStyle>
    </>
  );
};

export default Slider;
