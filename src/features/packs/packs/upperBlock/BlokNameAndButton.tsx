import  React from 'react';
import st from 'features/packs/packs/upperBlock/BlokNameAndButton.module.css'


type BlokNameAndButtonType = {
    title:string
    nameButton:string
    callback:()=>void
}


export const BlokNameAndButton = ({title,nameButton,callback}:BlokNameAndButtonType) => {
    return(
      <div className={st.common}>
          <div className={st.title}>{title}</div>
         <button onClick={callback}
             className={st.button}>{nameButton}</button>
      </div>
  )
}