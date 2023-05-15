import  React from 'react';
import st from './BlokNameAndButton.module.css'

export const BlokNameAndButton = () => {
  return(
      <div className={st.common}>
          <div className={st.title}>Список КОЛОД</div>
         <button className={st.button}>Добавить колоду</button>
      </div>
  )
}