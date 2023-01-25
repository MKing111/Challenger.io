import axios from 'axios';

const BASE_URL = 'https://raider.io/api/v1';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {},
    headers: {}
  };

export const fetchFromBlizzardAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    //console.log(data)
    return data;
}