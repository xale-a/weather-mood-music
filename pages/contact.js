import styles from '../styles/Contact.module.css';
import GitHub from '../public/git-hub.svg';

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contact me on:</h1>
      <a href="https://github.com/xale-a" target="_blank" rel="noopener noreferrer"><GitHub className={styles.icon} />GitHub</a>
    </div>
  );
}

export default Contact;
