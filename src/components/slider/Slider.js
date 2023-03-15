import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImgWraper, Wraper } from "../../components/slider/Slider.styled";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <ImgWraper>
        <img src="https://amiel.club/uploads/posts/2022-10/1664620528_1-amiel-club-p-kukhnya-v-yegipetskom-stile-oboi-1.jpg" />
      </ImgWraper>
      <ImgWraper>
        <img src="https://amiel.club/uploads/posts/2022-10/1664620528_1-amiel-club-p-kukhnya-v-yegipetskom-stile-oboi-1.jpg" />
      </ImgWraper>
      <ImgWraper>
        <img src="https://amiel.club/uploads/posts/2022-10/thumbs/1664620522_2-amiel-club-p-kukhnya-v-yegipetskom-stile-oboi-2.jpg" />
      </ImgWraper>
    </Slider>
  );
}
