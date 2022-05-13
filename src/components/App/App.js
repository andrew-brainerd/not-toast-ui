import { React } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Route
          path="/apple-app-site-association"
          onEnter={() => window.location.reload()}
        />
        <Route
          path="/"
          component={Home}
        />
      </div>
    </div>
  );
};

export default App;
