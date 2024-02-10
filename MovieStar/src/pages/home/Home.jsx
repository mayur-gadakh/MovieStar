import React from "react";
import "./Home.scss";
import HeroBanner from "./heroBanner/heroBanner";
import Explore from "../explore/Explore";
import Trending from "./trending/Trending";
import Populer from "./populer/Populer";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Populer />
      <TopRated />
    </div>
  );
};

export default Home;
