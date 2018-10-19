import axios from 'axios';

export default {
  async searchTv(text) {
    try {
      const jsonExample = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=secret&language=en-US&page=1&query=${text}`);
      return (jsonExample.data);
    } catch (error) {
      throw error;
    }
  },
};
