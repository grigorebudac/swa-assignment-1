import { WeatherData } from "models/WeatherData.model";

export const WeatherForecast = function (type, time, place, from, to, unit) {
  return Object.assign(
    {
      from,
      to,
    },
    WeatherData(type, time, place, undefined, unit)
  );
};
