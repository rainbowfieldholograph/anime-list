import axios from 'axios'
import { API_BASE_URL } from '../constants/api'

class Api {
  async getData(url, params) {
    try {
      const response = await axios.get(API_BASE_URL + url, { params })
      return response.data.results
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Api()
