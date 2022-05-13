import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.content}>
      <a href="notToast://properties">
        <h1>Not Toast</h1>
      </a>
    </div>
  );
};

export default Home;
