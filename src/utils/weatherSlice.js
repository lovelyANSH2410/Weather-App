import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: null,
    location: null,
    minTemp: null,
    maxTemp: null,
    humidity: null,
    real_feel: null,
    wind_speed: null,
    icon_code: null,
    cloud_description: null,
    pressure: null,
    sunrise: null,
  },
  reducers: {
    setTemperature(state, action) {
      state.temperature = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setMinTemp(state, action) {
      state.minTemp = action.payload;
    },
    setMaxTemp(state, action) {
      state.maxTemp = action.payload;
    },
    setHumidity(state, action) {
      state.humidity = action.payload;
    },
    setRealFeel(state, action) {
      state.real_feel = action.payload;
    },
    setWindSpeed(state, action) {
      state.wind_speed = action.payload;
    },
    setIconCode(state, action) {
      state.icon_code = action.payload;
    },
    setCloudDescription(state, action) {
      state.cloud_description = action.payload;
    },
    setPressure(state, action) {
      state.pressure = action.payload;
    },
    setSunrise(state, action) {
      state.sunrise = action.payload;
    },
    setWeatherData(state, action) {
      const {
        temperature,
        location,
        minTemp,
        maxTemp,
        humidity,
        real_feel,
        wind_speed,
        icon_code,
        cloud_description,
        pressure,
        sunrise,
      } = action.payload;

      state.temperature = temperature;
      state.location = location;
      state.minTemp = minTemp;
      state.maxTemp = maxTemp;
      state.humidity = humidity;
      state.real_feel = real_feel;
      state.wind_speed = wind_speed;
      state.icon_code = icon_code;
      state.cloud_description = cloud_description;
      state.pressure = pressure;
      state.sunrise = sunrise;
    },
  },
});

export const {
  setTemperature,
  setLocation,
  setMinTemp,
  setMaxTemp,
  setHumidity,
  setRealFeel,
  setWindSpeed,
  setIconCode,
  setCloudDescription,
  setPressure,
  setWeatherData,
  setSunrise,
} = weatherSlice.actions;

export default weatherSlice.reducer;
