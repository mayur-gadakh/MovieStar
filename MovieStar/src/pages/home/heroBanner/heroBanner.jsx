import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./heroBanner.scss";
import { useFetch } from "../../../customeHooks/useFetch";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const [btnId, setBtnId] = useState(0);
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    event.preventDefault();
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner ">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subtitle">
            Millions of movies,TV shows and people to Discover.Explore Now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search For Movie or TV show"
              onKeyUp={searchQueryHandler}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <button onChange={(event) => setBtnId(1)}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
