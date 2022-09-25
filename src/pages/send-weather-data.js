import React, { useState } from "react";

import Header from "components/Header";
import SelectLocation from "components/SelectLocation";
import { LOCATIONS } from "config/constants";
import { WeatherService } from "../services/WeatherService";

function getInputValue(e, name) {
  return e.target[name].value;
}

const weatherService = WeatherService((...args) =>
  fetch(...args).then((res) => res.json())
);

const SendWeatherData = () => {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [isLoading, setLoading] = useState(false);

  function handleChangeLocation(location) {
    setLocation(location);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log({ e });

    try {
      const type = getInputValue(e, "type");
      const place = getInputValue(e, "place");
      const value = getInputValue(e, "value");
      const unit = getInputValue(e, "unit");

      await weatherService.sendData({
        type,
        place,
        value,
        unit,
      });

      alert("Success!");
      e.target.reset();
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Type</label>
          <input id="type" name="type" required />
        </div>

        <SelectLocation value={location} onChange={handleChangeLocation} />

        <div>
          <label htmlFor="value">Value</label>
          <input id="value" name="value" required />
        </div>

        <div>
          <label htmlFor="unit">Unit</label>
          <input id="unit" name="unit" required />
        </div>

        <input type="submit" value="Submit" disabled={isLoading} />
      </form>
    </div>
  );
};

export default SendWeatherData;
