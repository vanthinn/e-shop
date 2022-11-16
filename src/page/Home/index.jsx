import React from "react";
import Brand from "./component/Brands";
import Categories from "./component/Categories";
import HomeBanner from "./component/HomeBanner";

function Home(props) {
  return (
    <div>
      <HomeBanner />
      <Brand />
      <Categories />
    </div>
  );
}

Home.propTypes = {};

export default Home;
