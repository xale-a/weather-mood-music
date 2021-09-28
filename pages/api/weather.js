import axios from 'axios';
import { windSpeedDescMps, windDirectionDesc } from '../../lib/windDesc';

export default async function handler(req, res) {
  try {
    let apiRes;
    if (req.query.city != null) {
      apiRes = await axios('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          id: req.query.city,
          appid: process.env.OPEN_WEATHER_API_KEY,
          units: 'metric',
        },
      });
    } else if (req.query.lat != null && req.query.lon != null) {
      apiRes = await axios('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: req.query.lat,
          lon: req.query.lon,
          appid: process.env.OPEN_WEATHER_API_KEY,
          units: 'metric',
        }
      });
    } else {
      throw new Error('Invalid query arguments');
    }
    const data = apiRes.data;
  
    const weather = {
      condition_id: data.weather[0].id,
      city: data.name.concat(', ', data.sys.country),
      temp: Math.round(data.main.temp).toString().concat('°С'),
      feelsLike: Math.round(data.main.feels_like).toString().concat('°С'),
      wind: data.wind.speed.toFixed(1).toString().concat('mp/s ', windDirectionDesc(data.wind.deg)),
      humidity: data.main.humidity.toString().concat('%'),
      pressure: data.main.pressure.toString().concat('hPa'),
      visibility: (data.visibility / 1000).toFixed(1).toString().concat('km'),
      desc: {
        weather: data.weather[0].description.charAt(0).toUpperCase().concat(data.weather[0].description.slice(1)),
        wind: windSpeedDescMps(data.wind.speed),
      },
      image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
    }
    res.status(200).json(weather);
  } catch (error) {
    console.log('api/weather: ' + error.message);
    res.status(500).send();
  }
}
