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
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
      {isTabletPort && <MobileNav />}
    </div>
  </>);
}

export default Layout;
