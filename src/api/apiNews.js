import axios from "axios";

const BASE_URL = process.env.REACT_APP_NEWS_BASE_API_URL;
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return data.news;
  } catch (error) {
    console.log(error);
  }
};
