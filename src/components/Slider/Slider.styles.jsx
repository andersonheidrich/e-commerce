import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperStyle = styled(Swiper)`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 60%;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 40px;

  .swiper-button-next,
  .swiper-button-prev {
    color: #1c1c24;
  }
`;

export const SlideStyle = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: grab;

  .slide-console {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin: 0 16px 0 60px; */
  }

  .slide-title {
  }

  .slide-text {
    margin: 0 60px 0 16px;
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    background-color: #1c1c24;
    color: #d5c7b9;
    font-weight: bold;
  }

  .slide-image {
    margin-top: 40px;
    width: 400px;
    height: 400px;
  }
`;
