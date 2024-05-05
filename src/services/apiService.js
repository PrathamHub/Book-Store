import axios from "axios";

const BASE_URL = "https://softwium.com/api";

const apiService = {
  getBooks: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching books: " + error.message);
    }
  },
  getBookById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/books/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching book details: " + error.message);
    }
  },
};

export default apiService;
