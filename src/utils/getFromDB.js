import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {},
    headers: {}
  };

export const getFromDB = async (name) => {
    const { data } = await axios.get(`${BASE_URL}/characters/${name}`, options);
    console.log(data)
    return data;
}