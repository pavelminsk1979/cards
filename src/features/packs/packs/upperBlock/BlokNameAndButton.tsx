import  React from 'react';
import st from 'features/packs/packs/upperBlock/BlokNameAndButton.module.css'

type BlokNameAndButtonType = {
    title:string
    nameButton:string
}

export const BlokNameAndButton = (props:BlokNameAndButtonType) => {
  return(
      <div className={st.common}>
          <div className={st.title}>{props.title}</div>
         <button className={st.button}>{props.nameButton}</button>
      </div>
  )
}