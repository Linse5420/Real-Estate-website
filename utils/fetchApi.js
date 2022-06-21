import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'dcbbf5fb94msh14498524fa8d1c0p12add2jsn9d2812baa941',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        
    },
  });
  return data;
    
}
