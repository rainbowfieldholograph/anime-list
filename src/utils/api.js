import axios from 'axios'
import { API_BASE_URL } from '../constants/api'

class Api {
  async searchAnimeByName(name, page = 1, limit = 10) {
    const uri = `${API_BASE_URL}/search/anime`
    try {
      const response = await axios.get(uri, {
        params: {
          q: name,
          page: page,
          limit: limit,
        },
      })
      return response.data.results
    } catch (error) {
      console.log(error)
    }
  }

  async getCharactersByAnime(animeId) {
    const uri = `${API_BASE_URL}/anime/${animeId}/characters_staff`
    try {
      const { data } = await axios.get(uri)
      return data.characters
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Api()
