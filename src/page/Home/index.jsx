import React from "react";
import Brand from "./component/Brands";
import Categories from "./component/Categories";
import HomeBanner from "./component/HomeBanner";
import TrendingProduct from "./component/TrendingProduct";
import VideoBanner from "./component/VideoBanner";

function Home(props) {
  return (
    <div>
      <HomeBanner />
      <Brand />
      <Categories />
      <TrendingProduct />
      <VideoBanner />
    </div>
  );
}

Home.propTypes = {};

export default Home;
