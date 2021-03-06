import axios from "axios";
const secretKey = process.env.VUE_APP_TMDB_API_KEY;
export default {
  async searchTv(text) {
    try {
      const jsonExample = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${secretKey}&language=en-US&page=1&query=${text}`
      );
      return jsonExample.data;
    } catch (error) {
      throw error;
    }
  },
  async getPopular() {
    try {
      const jsonExample = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${secretKey}&language=fr-FR&page=1`
      );
      return jsonExample.data;
    } catch (error) {
      throw error;
    }
  },
  async getShow(showId) {
    return axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=${secretKey}&language=fr-FR`
    );
  },
  async getGenre() {
    try {
      const jsonExample = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${secretKey}&language=fr-FR`
      );
      return jsonExample.data;
    } catch (error) {
      throw error;
    }
  }
};
