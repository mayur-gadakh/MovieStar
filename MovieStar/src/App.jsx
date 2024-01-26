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
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchingDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <BrowserRouter>
      <Header />
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
