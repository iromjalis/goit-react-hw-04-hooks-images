import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "21072245-3acfda09a1d5bc65070e6b336";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  image_type: "photo",
  key: API_KEY,
};

const fetchImages = async ({ currentPage, searchQuery }) => {
  return await axios
    .get("", {
      params: {
        page: currentPage,
        q: searchQuery,
      },
    })
    .then((response) => response.data.hits);
};

export default { fetchImages };
