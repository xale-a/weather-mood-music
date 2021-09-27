import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
