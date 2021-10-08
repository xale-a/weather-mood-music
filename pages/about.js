import Head from 'next/head';
import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Weather Mood Music</title>
      </Head>
      <h1>About app:</h1>
      <p>Weather Mood Music is an app that recommends music based on current weather.</p>
      <p>Under the hood is powered by <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>. It uses <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> as fullstack solution and <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">Redux Toolkit</a> as global state management. Data is gathered from <a href="https://www.last.fm/api" target="_blank" rel="noopener noreferrer">Last.fm</a> and <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">OpenWeather</a> APIs.</p>
      <p>You can checkout source code on <a href="https://github.com/xale-a/weather-mood-music" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </div>
  );
}

export default About;
