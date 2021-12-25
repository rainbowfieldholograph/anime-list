import styles from './AnimeCards.module.css'
import Api from '../../utils/api'
import { CONTENT_BLOCK } from '../../constants/root'
import ErrorBlock from '../error/ErrorBlock'
import AnimeInfoModal from '../animeInfoModal/AnimeInfoModal'

class AnimeCards {
  renderAnimeCards(data) {
    let htmlContent = ''

    data.forEach(async (anime) => {
      const { mal_id: id, title, image_url: imgUrl } = anime
      htmlContent += `
          <li class=${styles.card}>
            <button class=${styles.btn} id='card-button' data-id='${id}'>
              <span class=${styles.title}>${title}</span>
              <img class=${styles.image} src=${imgUrl}/>
            </button>
          </li>
      `
    })

    const htmlWrapper = `<ul class=${styles.wrapper}>${htmlContent}</ul>`

    CONTENT_BLOCK.innerHTML = htmlWrapper
    document.querySelectorAll('#card-button').forEach((button) => {
      const cardId = button.getAttribute('data-id')
      button.addEventListener('click', async () => {
        AnimeInfoModal.render(cardId)
      })
    })
  }

  async render() {
    const animeData = await Api.searchAnimeByName('monogatari')
    animeData ? this.renderAnimeCards(animeData) : ErrorBlock.render()
  }
}

export default new AnimeCards()
