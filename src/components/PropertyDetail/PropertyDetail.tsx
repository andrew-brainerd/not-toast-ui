import { useEffect } from 'react';

interface PropertyDetailProps {
  propertyId: string
}

const PropertyDetail = ({ propertyId }: PropertyDetailProps) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace(`nottoast://properties/${propertyId}`);
    }, 3000);
  });

  return (
    <h1>Redirecting to Not Toast...</h1>
  );
};

export default PropertyDetail;
