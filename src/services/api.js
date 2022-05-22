import axios from 'axios';

axios.defaults.baseURL = 'https://628a29cd5da6ddfd5d606dc5.mockapi.io/';

export const addContact = async values => {
  const response = await axios.post('/contacts', values);
  return response.data;
};
