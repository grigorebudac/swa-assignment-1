import React from "react";
import WeatherPageContainer from "containers/WeatherPageContainer";
import { WeatherService } from "services/WeatherService";

const weatherService = WeatherService((...args) =>
  fetch(...args).then((res) => res.json())
);

const Home = () => {
  return <WeatherPageContainer weatherService={weatherService} />;
};

export default Home;
