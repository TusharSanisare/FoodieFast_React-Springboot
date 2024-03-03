import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topMeels } from "./TopMeels";
import CarousalItem from "./CarousalItem";

const MultipleItemCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    authplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="">
      <Slider {...settings} className="">
        {topMeels.map((item) => (
          <CarousalItem
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItemCarousel;
