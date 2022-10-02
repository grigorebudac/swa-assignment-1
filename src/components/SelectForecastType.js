import React from "react";
import { FORECAST_TYPE } from "../config/constants";

const SelectForecastType = (props) => {
  return (
    <div>
      <label htmlFor="forecast-type">Type</label>
      <select
        id="forecast-type"
        name="type"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {FORECAST_TYPE.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForecastType;
