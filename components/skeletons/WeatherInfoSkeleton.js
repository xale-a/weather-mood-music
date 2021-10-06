import styles from './WeatherInfoSkeleton.module.css';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';

function WeatherInfoSkeleton() {
  const isMobile = useMediaQuery({ query: '(max-width: 43.25em)' });
  const isTablet = useMediaQuery({ query: '(max-width: 80.75em)' });

  return (<>
    <div className={styles.container}>
      {isMobile ? <>
        <ContentLoader
          viewBox="0 0 306.28 47.12"
          width={306.28}
          height={47.12}
          backgroundColor="#dedede33"
          foregroundColor="#dedede66"
          speed={1}
        >
          <rect width="63.35" height="47.12" rx="18.06"/>
          <rect x="70.68" y="6.28" width="62.83" height="31.41" rx="4.45"/>
          <rect x="148.69" width="157.59" height="45.03" rx="4.19"/>
        </ContentLoader>
      </> : isTablet ? <>
        <ContentLoader
          viewBox="0 0 578.82 44.47"
          width={578.82}
          height={44.47}
          backgroundColor="#dedede33"
          foregroundColor="#dedede66"
          speed={1}
        >
          <rect width="205.41" height="44.47" rx="4.59"/>
          <rect x="224.71" width="50.29" height="44.47" rx="20"/>
          <rect x="288" y="2.53" width="76.94" height="40.94" rx="4.03"/>
          <rect x="375.53" y="9.88" width="203.29" height="26.12" rx="2.47"/>
        </ContentLoader>
      </> : <>
        <ContentLoader
          viewBox="0 0 282 419.37"
          width={282}
          height={419.37}
          backgroundColor="#dedede33"
          foregroundColor="#dedede66"
          speed={1}
        >
          <rect x="22.23" width="244.47" height="44.46" rx="5.12"/>
          <rect x="80.18" y="91.69" width="123.43" height="104.66" rx="48.54"/>
          <rect x="87.38" y="227.05" width="107.66" height="47.2" rx="3.35"/>
          <rect x="24.29" y="281.78" width="233.84" height="24.28" rx="3.53"/>
          <rect y="336.7" width="116.18" height="20.52" rx="2.82"/>
          <rect y="367.77" width="116.18" height="20.52" rx="2.82"/>
          <rect y="398.84" width="116.18" height="20.52" rx="2.82"/>
          <rect x="165.82" y="336.7" width="116.18" height="20.52" rx="2.82"/>
          <rect x="165.82" y="367.77" width="116.18" height="20.52" rx="2.82"/>
        </ContentLoader>
      </>}
    </div>
  </>);
}

export default WeatherInfoSkeleton;
