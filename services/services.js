import axios from 'axios';
const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'd686daa93fd762002b41520394752572';

export const getForecast = async (latitude, longitude) => {
  console.log(
    `${apiUrl}onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`,
  );
  const resp = await axios.get(
    `${apiUrl}onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`,
  );

  return resp.data;
};
