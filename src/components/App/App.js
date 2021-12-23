import './App.css'
import AnimeCardsList from '../AnimeCardList/AnimeCardsList'

class App {
  async render() {
    await AnimeCardsList.render()
  }
}

export default new App()
