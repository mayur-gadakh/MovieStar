import { useEffect } from "react";
import { fetchingDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGeners } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import heroBanner from "./pages/home/heroBanner/heroBanner";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import pageNotFound from "./pages/404/404";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import SearchResult from "./pages/SearchResult/SearchResult";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetchingDataFromApi("/movie/top_rated").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:mediaType/:id" element={<Details />}></Route>
        <Route path="/search/:query" element={<SearchResult />}></Route>
        <Route path="*" element={<pageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
