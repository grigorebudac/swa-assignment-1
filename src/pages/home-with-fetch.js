import React from "react";
import WeatherPageContainer from "containers/WeatherPageContainer";
import { WeatherService } from "services/WeatherService";
import { fetchFetcher } from "../config/fetchers";

const weatherService = WeatherService(fetchFetcher);

const Home = () => {
  return <WeatherPageContainer weatherService={weatherService} />;
};

export default Home;
