import React from "react";
import { LOCATIONS } from "../config/constants";

const SelectLocation = (props) => {
  return (
    <div>
      <label htmlFor="select-location">City</label>
      <select
        id="select-location"
        name="place"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {LOCATIONS.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectLocation;
