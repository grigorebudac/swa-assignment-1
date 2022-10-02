export const WeatherData = function (data) {
  return {
    getType: () => data.type,
    getTime: () => data.time,
    getPlace: () => data.place,
    getValue: () => data.value,
    getUnit: () => data.unit,
    getDate: function () {
      return new Date(this.getTime());
    },
    getValueWithUnit: function () {
      return `${this.getValue()} ${this.getUnit()}`;
    },
    getFormattedDate: function () {
      return this.getDate().toLocaleDateString();
    },
    getFormattedTime: function () {
      return this.getDate().toLocaleString();
    },
  };
};
