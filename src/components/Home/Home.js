import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.content}>
      <h1>Not Toast</h1>
      <section id="appLinks">
        <a href="notToast://properties">Open Not Toast App</a>
      </section>
    </div>
  );
};

export default Home;
