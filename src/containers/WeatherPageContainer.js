import React from "react";

export const LOCATIONS = ["Aarhus", "Copenhagen", "Horsens"];

const WeatherPageContainer = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="select-location">City</label>
        <select
          id="select-location"
          value={props.location}
          onChange={(e) => props.onChangeLocation(e.target.value)}
        >
          {LOCATIONS.map((location) => (
            <option key={location}>{location}</option>
          ))}
        </select>
      </div>

      <hr />

      <h2>The hourly forecast for the next 24 hours</h2>
      <table>
        <thead>
          <tr>
            <th>Hour</th>
            <th>Forecast</th>
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
