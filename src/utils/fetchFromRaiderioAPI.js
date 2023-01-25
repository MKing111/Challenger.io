import axios from 'axios';

const BASE_URL = 'https://raider-io.p.rapidapi.com/api/v1';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {},
    headers: {
      'X-RapidAPI-Key': '80c1a306camshebd73eef5dd181cp128d17jsn8a4c8c08d09d',
      'X-RapidAPI-Host': 'raider-io.p.rapidapi.com'
    }
  };

export const fetchFromRaiderioAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    //console.log(data)
    return data;
}