import { CONTENT_BLOCK } from '../../constants/root'
import api from '../../utils/api'
import ErrorBlock from '../error/ErrorBlock'
import styles from './AnimeInfoModal.module.css'

console.log(styles)

class AnimeInfoModal {
  async renderModal(charactersData) {
    let htmlContent = ''
    console.log(charactersData)
    charactersData.forEach((character) => {
      const { name, role, image_url: imgUrl } = character
      htmlContent += `
          <li class=${styles.block}>
          <img class=${styles.image} src=${imgUrl}/>
            <span class=${styles.infoWrapper}>
              <h1>${name}</h1>
              <h2>Role: ${role}</h2>
            </span>
          </li>
        `
    })
    const htmlWrapper = `<ul class=${styles.wrapper}>
      ${htmlContent}
    </ul>`
    CONTENT_BLOCK.innerHTML = htmlWrapper
  }

  async render(id) {
    const characters = await api.getCharactersByAnime(id)
    characters ? this.renderModal(characters) : ErrorBlock.render()
  }
}

export default new AnimeInfoModal()
