import { WeatherData } from "./WeatherData.model";

export const WeatherForecast = function (data) {
  return Object.assign(
    {
      getFrom: function () {
        return `${data.from}${this.getUnit()}`;
      },
      getTo: function () {
        return `${data.to}${this.getUnit()}`;
      },
      getForecast: function () {
        return `from ${this.getFrom()} to ${this.getTo()}`;
      },
    },
    WeatherData(data)
  );
};
