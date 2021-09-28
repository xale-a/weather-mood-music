import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { weatherToMoods } from './store/moodsSlice';
import { useGetWeatherQuery } from './store/api';
import Image from 'next/image';
import RefreshIcon from '../public/refresh.svg';
import styles from './WeatherInfo.module.css';

function WeatherInfo() {
  const city = useSelector(state => state.city.value);
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const { data: weather, error, isUninitialized, isFetching, refetch } = useGetWeatherQuery(city, {
    refetchOnMountOrArgChange: true,
    skip
  });

  useEffect(() => {
    if (city == null) {
      return
    }
    if (skip) {
      setSkip(false);
    }
  }, [city]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (weather == null) {
      return;
    }
    dispatch(weatherToMoods(weather.condition_id));
  }, [weather]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.weather}>
      {error ? <>Oh no,there was an error.</>
      : isUninitialized ? <></>
      : isFetching ? <>loading...</>
      : weather ? <>
        <h1 className={styles.city}>
          <button
            className={styles.refresh}
            onClick={refetch}
          >
            <RefreshIcon />
          </button>
          {weather.city}
        </h1>
        <div className={styles.image}>
          <Image
            className={styles.image}
            src={weather.image}
            alt="weather condition"
            width={200}
            height={200}
          />
        </div>

        <div className={styles.temp}>
          {weather.temp}
        </div>
        <div className={styles.desc}>
          {weather.desc.weather}. {weather.desc.wind}.
        </div>
        <div className={styles.info}>
          <div><span>Feels like:</span> {weather.feelsLike}</div>
          <div><span>Wind:</span> {weather.wind}</div>
          <div><span>Humidity:</span> {weather.humidity}</div>
          <div><span>Pressure:</span> {weather.pressure}</div>
          <div><span>Visibility:</span> {weather.visibility}</div>
        </div>
      </> : <>null</>}
    </div>
  );
}

export default WeatherInfo;
