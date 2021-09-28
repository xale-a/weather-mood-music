import CitySelect from '../components/CitySelect';
import styles from '../styles/Home.module.css';
import WeatherInfo from '../components/WeatherInfo';
import TrackList from '../components/TrackList';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <CitySelect />
        <TrackList />
      </div>
      <div className={styles.weather}>
        <WeatherInfo />
      </div>
    </div>
  );
}

export default Home;
