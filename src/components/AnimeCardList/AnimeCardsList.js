import styles from './AnimeCardsList.module.css'
import Api from '../../utils/api'
import { CONTENT_INDEX } from '../../constants/root'

class AnimeCardsList {
  async render() {
    const animeData = await Api.getData('/search/anime', { q: 'monogatari', page: 1, limit: 10 })
    let htmlContent = ''
    animeData.forEach((anime) => {
      const { mal_id: id, title, image_url: imgUrl } = anime
      htmlContent += `
          <li class=${styles.card}>
            <button class=${styles.btn}>
              <span class=${styles.title}>${title}</span>
              <img class=${styles.image} src=${imgUrl}/>
            </button>
          </li>
      `
    })

    const htmlWrapper = `<ul class=${styles.wrapper}>${htmlContent}</ul>`

    CONTENT_INDEX.innerHTML = htmlWrapper
  }
}

export default new AnimeCardsList()
