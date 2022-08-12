import { useEffect } from 'react';
import { Property } from '../../types/property';
import styles from './PropertyCard.module.scss';

const PropertyCard = ({ id: propertyId, name, images }: Property) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace(`nottoast://properties/${propertyId}`);
    }, 3000);
  });

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img alt={name} src={images[0]} />
      </div>
      <h5>{name}</h5>
    </div>
  );
};

export default PropertyCard;
