const BASE_URL = "http://localhost:8080";

export const WeatherService = function (fetcher) {
  return {
    getDataByCity: async (place) => {
      return fetcher(`${BASE_URL}/data`);
    },
  };
};
