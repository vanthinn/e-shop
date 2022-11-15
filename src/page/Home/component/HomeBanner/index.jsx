import Slider from "react-slick";
import BannerItem from "../BannerItem";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const banners = [
  {
    background:
      "https://d-themes.com/react/molla/demo-5/images/home/sliders/slide-1.jpg",
    title: "Mystery Deals",
    bottomSuggest: "Online only",
    topSuggest: "Don't miss",
    btnContent: "DISCOVER NOW",
  },
  {
    background:
      "https://d-themes.com/react/molla/demo-5/images/home/sliders/slide-2.jpg",
    title: "Treat your self",
    bottomSuggest: "Limited time only",
    topSuggest: "Up to 50% off",
    btnContent: "DISCOVER NOW",
  },
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
      }}
      onClick={onClick}
    />
  );
}
function HomeBanner(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.title} className="min-h-screen">
            <BannerItem {...banner} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

HomeBanner.propTypes = {};

export default HomeBanner;
