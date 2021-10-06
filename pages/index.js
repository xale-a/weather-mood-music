import styles from '../styles/Home.module.css';
import CitySelect from '../components/CitySelect';
import WeatherInfo from '../components/WeatherInfo';
import TrackList from '../components/TrackList';

function Home() {
  return (
    <div className={styles.container}>
      <CitySelect />
      <TrackList />
      <WeatherInfo />
    </div>
  );
}

export default Home;
