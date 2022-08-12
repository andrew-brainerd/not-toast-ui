import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router';
import { useDebouncedCallback } from 'use-debounce';
import Loading from '../Loading/Loading';
import styles from './App.module.scss';

const getWindowHeight = () => window.innerHeight - 5;

const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [appHeight, setAppHeight] = useState(getWindowHeight());
  const { pathname } = useLocation();

  const resizeHandler = useDebouncedCallback(() => {
    setAppHeight(getWindowHeight());
  }, 250);

  useEffect(() => {
    if (pathname !== '/') {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className={styles.app} style={{ height: appHeight }}>
      <div className={styles.content}>
        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </div>
  );
};

export default App;
