import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import * as Style from "./Slider.styles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = ({ data }) => {
  return (
    <>
      <Style.SwiperStyle
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        speed={1000}
        slideToClickedSlide={true}
        navigation
        pagination={{ el: ".swiper-pagination", clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          slidesPerView: "auto",
          loop: true,
        }}
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
