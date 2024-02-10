import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../customeHooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import CircleRating from "../../../components/circleRating/CircleRating";
import "../Home.scss";

const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");

    tab === "Movies" ? console.log("movies") : console.log("tv");
  };

  return (
    <div>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Top Rated</span>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint} />
      </div>
    </div>
  );
};

export default TopRated;
