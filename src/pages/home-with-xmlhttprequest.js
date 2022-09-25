import React from "react";
import WeatherPageContainer from "containers/WeatherPageContainer";
import { WeatherService } from "services/WeatherService";
import { fetchWithXMLHttpRequest } from "utils/fetchWithXMLHttpRequest";

const weatherService = WeatherService(fetchWithXMLHttpRequest);

const Home = () => {
  return <WeatherPageContainer weatherService={weatherService} />;
};

export default Home;
