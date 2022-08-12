import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Loading from '../Loading/Loading';
import styles from './App.module.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.app}>
      <header></header>
      <div className={styles.content}>
        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </div>
  );
};

export default App;
