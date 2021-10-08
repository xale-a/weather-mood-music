import Link from 'next/link';
import styles from './MobileNav.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setMobileNav } from './store/mobileNavSlice';

function MobileNav() {
  const mobileNav = useSelector(state => state.mobileNav.value);
  const dispatch = useDispatch();

  return (<>
    <div className={`${styles.overlay} ${!mobileNav && styles.hidden}`}>
      <nav className={`${styles.mobileNav} ${mobileNav ? styles.in : styles.out}`}>
        <button
          className={styles.close}
          onClick={() => dispatch(setMobileNav(false))}
          aria-label="Close navigation"
        >
          <div />
          <div />
        </button>
        <Link href="/"><a className={styles.link} onClick={() => dispatch(setMobileNav(false))}>Home</a></Link>
        <Link href="/about"><a className={styles.link} onClick={() => dispatch(setMobileNav(false))}>About</a></Link>
        <Link href="/contact"><a className={styles.link} onClick={() => dispatch(setMobileNav(false))}>Contact</a></Link>
      </nav>
      <div className={styles.closeOnClick} onClick={() => dispatch(setMobileNav(false))} />
    </div>
  </>);
}

export default MobileNav;
