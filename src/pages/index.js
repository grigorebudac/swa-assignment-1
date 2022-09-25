import React, { useEffect, useState } from "react";
import WeatherPageContainer, {
  LOCATIONS,
} from "containers/WeatherPageContainer";
import { WeatherService } from "services/WeatherService";

const weatherService = WeatherService((...args) =>
  fetch(...args).then((res) => res.json())
);

const Home = () => {
  const [location, setLocation] = useState(LOCATIONS[0]);

  useEffect(() => {
    handleLoadData();
  }, [location]);

  function handleChangeLocation(location) {
    setLocation(location);
  }

  async function handleLoadData() {
    const [historicalData] = await Promise.all([
      weatherService.getDataByCity(location),
    ]);

    console.log({ historicalData });
  }

  return (
    <div>
      <h1>Assignment 1 - XMLHttpRequest</h1>

      <br />
      <hr />

      <WeatherPageContainer
        location={location}
        onChangeLocation={handleChangeLocation}
      />
    </div>
  );
};

export default Home;
