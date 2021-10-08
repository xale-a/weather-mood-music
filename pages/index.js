import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CitySelect from '../components/CitySelect';
import WeatherInfo from '../components/WeatherInfo';
import TrackList from '../components/TrackList';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather Mood Music</title>
        <meta name="description" content="Music recommendation app that recommends music based on current weather" />
        <meta name="keywords" content="music recommendation weather" />
      </Head>
      <CitySelect />
      <TrackList />
      <WeatherInfo />
    </div>
  );
}

export default Home;
