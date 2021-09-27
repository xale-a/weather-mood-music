import Link from 'next/link';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link href="/"><a>Weather Mood Music</a></Link>
      </h1>
      <Link href="/about"><a className={styles.link}>About</a></Link>
      <Link href="/contact"><a className={styles.link}>Contact</a></Link>
    </nav>
  );
}

export default Navbar;
