import { FORECAST_TYPE } from "../config/constants";

export const Weather = function (data = []) {
  return {
    _getLastDayData: function () {
      let lastDayStartIndex = -1;

      for (let i = data.length - 1; i >= 0; i--) {
        const currentItem = data[i];
        const prevItem = data[i - 1];

        if (
          prevItem != null &&
          currentItem.getFormattedDate() !== prevItem.getFormattedDate()
        ) {
          lastDayStartIndex = i;
          break;
        }
      }

      return data.slice(lastDayStartIndex, data.length);
    },
    getLatestMeasurements: function () {
      let results = [];
      let existingTypes = [];

      for (let i = data.length - 1; i >= 0; i--) {
        const currentItem = data[i];
        const type = data[i].getType();

        if (!existingTypes.includes(type)) {
          existingTypes.unshift(type);
          results.unshift(currentItem);
        }
      }

      return results;
    },
    getMinimumTemperatureForToday: function () {
      let value = null;

      for (let item of this._getLastDayData()) {
        if (item.getType() === FORECAST_TYPE.TEMPERATURE) {
          if (item.getValue() < value || value == null) {
            value = item.getValue();
          }
        }
      }

      return value;
    },
    getMaximumTemperatureForToday: function () {
      let value = null;

      for (let item of this._getLastDayData()) {
        if (item.getType() === FORECAST_TYPE.TEMPERATURE) {
          if (item.getValue() > value || value == null) {
            value = item.getValue();
          }
        }
      }

      return value;
    },
    getTotalPrecipitation: function () {
      return this._getLastDayData().reduce((acc, cv) => {
        if (cv.getType() === FORECAST_TYPE.PRECIPITATION) {
          acc += cv.getValue();
        }

        return acc;
      }, 0);
    },
    getAverageWindSpeed: function () {
      let count = 0;

      const total = this._getLastDayData().reduce((acc, cv) => {
        if (cv.getType() === FORECAST_TYPE.WIND_SPEED) {
          count++;
          acc += cv.getValue();
        }

        return acc;
      }, 0);

      if (count === 0) {
        return 0;
      }

      return total / count;
    },
  };
};
