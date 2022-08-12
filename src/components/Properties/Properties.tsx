import { useEffect, useState } from 'react';
import { getProperties } from '../../api/properties';
import { Property } from '../../types/property';
import PropertyCard from '../PropertyCard/PropertyCard';
import styles from './Properties.module.scss';

interface PropertiesProps {
  properties: Property[] | undefined
}

const Properties = (): JSX.Element => { // { properties }: PropertiesProps
  const [properties, setProperties] = useState([] as Property[]);

  useEffect(() => {
    getProperties().then(response => {
      console.log('Response', response);
      setProperties(response);
    });
  }, []);

  return (
    <div className={styles.properties}>
      {properties?.map(property => {
        return (
          <PropertyCard {...property} />
        );
      })}
    </div>
  );
};

export default Properties;
