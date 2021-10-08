import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { setRefresh } from './store/refreshSlice';
import { setMobileNav } from './store/mobileNavSlice';
import styles from './Navbar.module.css';
import RefreshIcon from '../public/refresh.svg';
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const city = useSelector(state => state.city.value);
  const navRefresh = useSelector(state => state.navRefresh.value);
  const dispatch = useDispatch();
  const isTabletPort = useMediaQuery({ query: '(max-width: 55em)' });

  return (<>
    {isTabletPort ? <>
      <div className={styles.navbar}>
        <button
          className={styles.burger}
          onClick={() => dispatch(setMobileNav(true))}
          aria-label="Open navigation"
        >
          <div />
          <div />
          <div />
        </button>
        <h1 className={styles.logo}>
          <Link href="/"><a>Weather Mood Music</a></Link>
        </h1>
        <button
          className={styles.refresh}
          onClick={() => dispatch(setRefresh(true))}
          disabled={!city}
          aria-label="Refresh tracks"
        >
          <RefreshIcon />
        </button>
      </div>
    </> : <>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <Link href="/"><a>Weather Mood Music</a></Link>
        </h1>
        {navRefresh && <>
          <button
            className={styles.refresh}
            onClick={() => dispatch(setRefresh(true))}
            disabled={!city}
            aria-label="Refresh tracks"
          >
            <RefreshIcon />
          </button>
        </>}
        <Link href="/about"><a className={styles.link}>About</a></Link>
        <Link href="/contact"><a className={styles.link}>Contact</a></Link>
      </nav>
    </>}
  </>);
}

export default Navbar;
