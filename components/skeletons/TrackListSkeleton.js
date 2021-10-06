import ContentLoader from 'react-content-loader';
import styles from './TrackListSkeleton.module.css';
import { useMediaQuery } from 'react-responsive';

function TrackListSkeleton() {
  const isMobile = useMediaQuery({ query: '(max-width: 43.25em)' })
  const isLaptop = useMediaQuery({ query: '(max-width: 101.35em)' });

  return (
    <div className={styles.container}>
      {isMobile ? <>
        <ContentLoader
          viewBox="0 0 407.47 141.39"
          width={'100%'}
          height={141.39}
          backgroundColor="#dedede33"
          foregroundColor="#dedede66"
          speed={1}
        >
          <rect x="10.47" y="13.18" width="81.68" height="81.68"/>
          <rect x="103.24" y="20.94" width="149.29" height="24" rx="3"/>
          <rect x="103.24" y="52" width="100.5" height="18.7" rx="2.96"/>
          <rect x="103.24" y="76" width="94.94" height="13.41" rx="3.12"/>
          <rect x="10.47" y="110.24" width="127.71" height="19.06" rx="2.97"/>
          <rect x="321.06" y="106.41" width="78.35" height="21.88" rx="3.53"/>
        </ContentLoader>
      </> : isLaptop ? <>
        <ContentLoader
          viewBox="0 0 740.18 130"
          backgroundColor="#dedede33"
          foregroundColor="#dedede66"
          speed={1}
        >
          <rect x="17.17" y="17.58" width="95.88" height="95.88"/>
          <rect x="126.92" y="34.71" width="251.02" height="36.71" rx="2.63"/>
          <rect x="126.92" y="82.94" width="129.03" height="23.63" rx="2.71"/>
          <rect x="391" y="88.35" width="138.71" height="18.71" rx="2.47"/>
          <rect x="589.65" y="83.41" width="139.76" height="23.65" rx="2.82"/>
          <rect x="650.71" y="14.88" width="78.71" height="21.88" rx="1.79"/>
        </ContentLoader>
      </> : <>
        <ContentLoader
          viewBox="0 0 820 130"
          backgroundColor="#dedede33"
          foregroundColor="#dedede66"
          speed={1}
        >
          <rect x="17.17" y="17.58" width="95.88" height="95.88"/>
          <rect x="126.92" y="34.71" width="251.02" height="36.71" rx="2.63"/>
          <rect x="126.92" y="82.94" width="129.03" height="23.63" rx="2.71"/>
          <rect x="415" y="88.35" width="138.71" height="18.71" rx="2.47"/>
          <rect x="666.65" y="83.41" width="139.76" height="23.65" rx="2.82"/>
          <rect x="727.71" y="14.88" width="78.71" height="21.88" rx="1.79"/>
        </ContentLoader>
      </>}
    </div>
  );
}

export default TrackListSkeleton;
