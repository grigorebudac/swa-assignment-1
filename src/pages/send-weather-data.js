import React, { useState } from "react";

import Header from "../components/Header";
import SelectLocation from "../components/SelectLocation";
import { FORECAST_TYPE, LOCATIONS, UNITS } from "../config/constants";
import { WeatherService } from "../services/WeatherService";

import { xmlFetcher } from "../config/fetchers";
import SelectForecastType from "../components/SelectForecastType";

function getInputValue(e, name) {
  return e.target[name].value;
}

const weatherService = WeatherService(xmlFetcher);

const SendWeatherData = () => {
  const [type, setType] = useState(FORECAST_TYPE.TEMPERATURE);
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [isLoading, setLoading] = useState(false);

  const unit = UNITS[type];

  function handleChangeLocation(location) {
    setLocation(location);
  }

  function handleChangeForecastType(type) {
    setType(type);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const place = getInputValue(e, "place");
      const value = getInputValue(e, "value");

      await weatherService.sendData({
        place,
        value,
        unit,
        type,
      });

      alert("Success!");
      e.target.reset();
    } catch (error) {
      alert(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />

      <form onSubmit={handleSubmit}>
        <SelectForecastType value={type} onChange={handleChangeForecastType} />
        <SelectLocation value={location} onChange={handleChangeLocation} />

        <div>
          <label htmlFor="value">Value ({unit})</label>
          <input id="value" name="value" type="number" step=".01" required />
        </div>

        <input type="submit" value="Submit" disabled={isLoading} />
      </form>
    </div>
  );
};

export default SendWeatherData;
