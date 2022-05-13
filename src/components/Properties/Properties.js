import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Properties = () => {
  const { propertyId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      window.location.replace(`nottoast://properties/${propertyId}`);
    }, 3000);
  });

  return (
    <h1>Redirecting to Not Toast...</h1>
  );
};

export default Properties;
