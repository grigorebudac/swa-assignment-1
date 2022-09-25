import React, { useEffect, useState } from "react";
import WeatherPageContainer, {
  LOCATIONS,
} from "containers/WeatherPageContainer";
import { WeatherService } from "services/WeatherService";
import { fetchWithXMLHttpRequest } from "utils/fetchWithXMLHttpRequest";

const weatherService = WeatherService(fetchWithXMLHttpRequest);

const Home = () => {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [historicalData, setHistoricalData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    handleLoadData();
  }, [location]);

  function handleChangeLocation(location) {
    setLocation(location);
  }

  async function handleLoadData() {
    const [historicalData, forecastData] = await Promise.all([
      weatherService.getDataByCity(location),
      weatherService.getForecast(location),
    ]);

    setHistoricalData(historicalData);
    setForecastData(forecastData);
  }

  return (
    <WeatherPageContainer
      location={location}
      historicalData={historicalData}
      forecastData={forecastData}
      onChangeLocation={handleChangeLocation}
    />
  );
};

export default Home;
