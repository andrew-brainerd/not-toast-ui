import { React } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Properties from '../Properties/Properties';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Route
          path="/apple-app-site-association"
          onEnter={() => window.location.reload()}
        />
        <Route exact path="/" component={Home} />
        <Route path="/properties/:propertyId" component={Properties} />
      </div>
    </div>
  );
};

export default App;
