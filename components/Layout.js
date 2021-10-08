import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { setNavRefresh } from './store/navRefreshSlice';
import styles from './Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileNav from './MobileNav';
import { useMediaQuery } from 'react-responsive';

function Layout({ children }) {
  const dispatch = useDispatch();
  const navRefresh = useSelector(state => state.navRefresh.value);
  const isTabletPort = useMediaQuery({ query: '(max-width: 55em)' })
  const isTabletLand = useMediaQuery({ query: '(max-width: 80.75em)' });

  const handleScroll = (e) => {
    if (e.target.scrollTop >= 75) {
      if (navRefresh) {
        return;
      } else {
        dispatch(setNavRefresh(true));
      }
    } else {
      if (navRefresh) {
        dispatch(setNavRefresh(false));
      } else {
        return;
      }
    }
  }

  return (<>
    <div className={styles.container} onScroll={isTabletLand ? isTabletPort ? null : handleScroll : null }>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="favicon/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="favicon/favicon.ico" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
      {isTabletPort && <MobileNav />}
    </div>
  </>);
}

export default Layout;
