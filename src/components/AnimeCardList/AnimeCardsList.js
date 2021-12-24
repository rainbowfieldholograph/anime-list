import styles from './AnimeCardsList.module.css'
import Api from '../../utils/api'
import { CONTENT_INDEX } from '../../constants/root'

class AnimeCardsList {
  async render() {
    const animeData = await Api.searchAnimeByName('monogatari')
    let htmlContent = ''
    console.log(animeData)
    animeData.forEach(async (anime) => {
      const { mal_id: id, title, image_url: imgUrl } = anime
      const uri = (htmlContent += `
          <li class=${styles.card}>
            <button class=${styles.btn} id='card-button' data-id='${id}'>
              <span class=${styles.title}>${title}</span>
              <img class=${styles.image} src=${imgUrl}/>
            </button>
          </li>
      `)
    })

    const htmlWrapper = `<ul class=${styles.wrapper}>${htmlContent}</ul>`

    CONTENT_INDEX.innerHTML = htmlWrapper
    document.querySelectorAll('#card-button').forEach((button) => {
      const cardId = button.getAttribute('data-id')
      button.addEventListener('click', async () => {
        //произошло замыкание x)
        console.log(await Api.getCharactersByAnime(cardId))
      })
    })
  }
}

export default new AnimeCardsList()
