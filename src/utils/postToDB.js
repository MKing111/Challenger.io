import axios from 'axios';

const BASE_URL = 'http://localhost:5000/characters';



export const postToDB = async (character) => {
    
    try {
        const response = await axios.post(BASE_URL, character);
        console.log(response.data);
    } catch (error) {
        console.log(error);
      };
}