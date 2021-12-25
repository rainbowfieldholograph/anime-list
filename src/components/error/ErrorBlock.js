import { CONTENT_BLOCK } from '../../constants/root'
import styles from './ErrorBlock.module.css'

class Error {
  render() {
    const htmlWrapper = `
      <div class=${styles.wrapper}>
        <p class=font-size-3>Error!</p>
        <p class=font-size-2>Please try later</p>
      </div>`

    CONTENT_BLOCK.innerHTML = htmlWrapper
  }
}

export default new Error()
