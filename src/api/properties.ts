import { client } from './client';

export const getProperties = async () => {
  const response = await client.get(`/properties`)
    .then(response => response.data?.properties)
    .catch(err => console.error(err));

  return response;
};
