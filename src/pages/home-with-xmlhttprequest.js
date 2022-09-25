import React from "react";
import WeatherPageContainer from "containers/WeatherPageContainer";
import { WeatherService } from "services/WeatherService";
import { xmlFetcher } from "config/fetchers";

const weatherService = WeatherService(xmlFetcher);

const Home = () => {
  return <WeatherPageContainer weatherService={weatherService} />;
};

export default Home;
