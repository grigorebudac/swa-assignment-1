export const LOCATIONS = ["Aarhus", "Copenhagen", "Horsens"];

export const FORECAST_TYPE = {
  TEMPERATURE: "temperature",
  PRECIPITATION: "precipitation",
  WIND_SPEED: "wind speed",
  CLOUD_COVERAGE: "cloud coverage",
};

export const UNITS = {
  [FORECAST_TYPE.TEMPERATURE]: "C",
  [FORECAST_TYPE.PRECIPITATION]: "mm",
  [FORECAST_TYPE.WIND_SPEED]: "m/s",
  [FORECAST_TYPE.CLOUD_COVERAGE]: "%",
};
