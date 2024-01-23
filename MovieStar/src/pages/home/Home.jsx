import React from "react";
import "./Home.scss";
import HeroBanner from "./heroBanner/heroBanner";
import Explore from "../explore/Explore";

const Home = () => {
  return (
    <div className="heroBanner">
      <HeroBanner />
      <Explore />
    </div>
  );
};

export default Home;
