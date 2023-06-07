import fotoError404 from '../image/images.png'
import st from './PageNotFound.module.css'

export const PageNotFound = () => {
    const fotoError = {
        backgroundImage: `url(${fotoError404})`
    }
  return(
      <div
          className={st.fotoError}
          style={fotoError}></div>
  )
}