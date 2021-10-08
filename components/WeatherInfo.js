import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { weatherToMoods } from './store/moodsSlice';
import { useGetWeatherQuery } from './store/api';
import Image from 'next/image';
import RefreshIcon from '../public/refresh.svg';
import styles from './WeatherInfo.module.css';
import WeatherInfoSkeleton from './skeletons/WeatherInfoSkeleton';
import { useMediaQuery } from 'react-responsive';
import Collapsible from 'react-collapsible';

function WeatherInfo() {
  const city = useSelector(state => state.city.value);
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const { data: weather, error, isUninitialized, isFetching, refetch } = useGetWeatherQuery(city, {
    refetchOnMountOrArgChange: true,
    skip
  });
  const isTablet = useMediaQuery({ query: '(max-width: 80.75em)' });
  const isMobile = useMediaQuery({ query: '(max-width: 43.25em)' });

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
    <>
      {error ? <>
        <div className={styles.container}>
          Oh no, there was an error... :/
          <button
            className={styles.tryAgain}
            onClick={refetch}
            aria-label="Try again"
          >
            Try again
          </button>
        </div>
      </> : isUninitialized ? <>
      </> : isFetching ? <>
        <div className={styles.container}>
          <WeatherInfoSkeleton />
        </div>
      </> : weather ?
        isTablet ? <>
          <div className={styles.container}>
            <Collapsible
              trigger={<>
                <div className={styles.conciseInfo}>
                  {!isMobile && <>
                    <h1 className={styles.city}>
                      {weather.city}
                    </h1>
                  </>}
                  <div className={styles.image}>
                    <Image
                      src={weather.image}
                      alt="weather condition"
                      width={200}
                      height={200}
                      layout="responsive"
                    />
                  </div>
                  <div className={styles.temp}>
                    {weather.temp}
                  </div>
                  <div className={styles.desc}>
                    {weather.desc.weather}. {weather.desc.wind}.
                  </div>
                  {!isMobile && <>
                    <button
                      className={styles.refresh}
                      onClick={refetch}
                      aria-label="Refresh weather"
                    >
                      <RefreshIcon />
                    </button>
                  </>}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.showMore}>
                    <path d="M24 22h-24l12-20z"/>
                  </svg>
                </div>
              </>}
              transitionTime={200}
              easing="ease-in"
            >
              <div className={styles.collapsibleInfo}>
                {isMobile && <>
                  <div className={styles.cityPlusRefresh}>
                    <h1 className={styles.city}>
                      {weather.city}
                    </h1>
                    <button
                      className={styles.refresh}
                      onClick={refetch}
                      aria-label="Refresh weather"
                    >
                      <RefreshIcon />
                    </button>
                  </div>
                </>}
                <div className={styles.info}>
                  <div><span>Feels like:</span> {weather.feelsLike}</div>
                  <div><span>Wind:</span> {weather.wind}</div>
                  <div><span>Humidity:</span> {weather.humidity}</div>
                  <div><span>Pressure:</span> {weather.pressure}</div>
                  <div><span>Visibility:</span> {weather.visibility}</div>
                </div>
              </div>
            </Collapsible>
          </div>
        </> : <>
          <div className={styles.container}>
            <h1 className={styles.city}>
              <button
                className={`${styles.refresh} ${!isTablet && styles.refresh_hover}`}
                onClick={refetch}
                aria-label="Refresh weather"
              >
                <RefreshIcon />
              </button>
              {weather.city}
            </h1>
            <div className={styles.image}>
              <Image
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
          </div>
        </>
      : <>null</>}
    </>
  );
}

export default WeatherInfo;
