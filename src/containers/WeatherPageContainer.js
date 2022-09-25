import React, { useState, useEffect } from "react";
import Header from "components/Header";
import { LOCATIONS } from "config/constants";
import SelectLocation from "../components/SelectLocation";

const WeatherPageContainer = (props) => {
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
      props.weatherService.getDataByCity(location),
      props.weatherService.getForecast(location),
    ]);

    setHistoricalData(historicalData);
    setForecastData(forecastData);
  }

  return (
    <div>
      <Header />

      <SelectLocation value={location} onChange={handleChangeLocation} />

      <hr />

      <h2>The hourly forecast for the next 24 hours</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Type</th>
            <th>Forecast</th>
          </tr>
        </thead>

        <tbody>
          {forecastData.map((forecast, index) => (
            <tr key={index}>
              <td>{forecast.getFormattedTime()}</td>
              <td>{forecast.type}</td>
              <td>{forecast.getForecast()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h2>All data for the latest measurement of each kind</h2>
      <table>
        <thead>
          <tr>
            <th>Measurement</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>About last day</h2>
      <table>
        <thead>
          <tr>
            <th>Minimum temperature</th>
            <th>Maximum temperature</th>
            <th>Total precipitation</th>
            <th>Average wind speed</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherPageContainer;
