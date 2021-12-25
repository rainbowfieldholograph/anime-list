import { MODAL_BLOCK } from '../../constants/root'
import api from '../../utils/api'
import ErrorBlock from '../error/ErrorBlock'
import styles from './AnimeInfoModal.module.css'

class AnimeInfoModal {
  renderModal(charactersData) {
    let htmlContent = ''

    charactersData.forEach((character) => {
      const { name, role, image_url: imgUrl } = character
      htmlContent += `
          <li class=${styles.block}>
            <img src=${imgUrl}/>
            <span class=${styles.infoWrapper}>
              <h1 class='font-size-2'>${name}</h1>
              <h2 class='font-size-1'>Role: ${role}</h2>
            </span>
          </li>
        `
    })
    const htmlWrapper = `<div id='modal-background' class=${styles.wrapper}>
      <div id='modal-container' class=${styles.container}>
        <h2 class='font-size-3'>Characters:</h2>
        <ul class=${styles.itemsList}>${htmlContent}</ul>
      </div>
    </div>`
    MODAL_BLOCK.innerHTML = htmlWrapper
    const modalBackground = document.querySelector('#modal-background')
    const modalContainer = document.querySelector('#modal-container')
    modalBackground.addEventListener('click', () => {
      MODAL_BLOCK.innerHTML = ''
    })
    console.log(modalContainer)
    modalContainer.addEventListener('click', (event) => event.stopPropagation())
  }

  async render(id) {
    const characters = await api.getCharactersByAnime(id)
    characters ? this.renderModal(characters) : ErrorBlock.render()
  }
}

export default new AnimeInfoModal()
