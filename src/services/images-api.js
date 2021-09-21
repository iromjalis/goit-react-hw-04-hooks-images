import axios from "axios";
import config from "./config";

const BASE_URL = "https://pixabay.com/api/";
// const API_KEY: '21072245-3acfda09a1d5bc65070e6b336';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  ...config,
  image_type: "photo",
  key: "21072245-3acfda09a1d5bc65070e6b336",
};

const fetchImages = async ({ currentPage, searchQuery }) => {
  return await axios
    .get("", {
      params: {
        currentPage,
        q: searchQuery,
      },
    })
    .then((response) => response.data.hits);
};

export default { fetchImages };
