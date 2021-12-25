import './App.css'
import AnimeCards from '../animeCards/AnimeCards'

class App {
  async render() {
    await AnimeCards.render()
  }
}

export default new App()
