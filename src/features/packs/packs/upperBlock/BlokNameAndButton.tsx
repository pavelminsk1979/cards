import  React from 'react';
import st from 'features/packs/packs/upperBlock/BlokNameAndButton.module.css'
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {packThunk} from "features/packs/packSlice";

type BlokNameAndButtonType = {
    title:string
    nameButton:string
    callback:()=>void
}


export const BlokNameAndButton = ({title,nameButton,callback}:BlokNameAndButtonType) => {
    const dispatch = useAppDispatch();

 /*   const createPackHandler = () => {
        callback
        dispatch(packThunk.createPack({name:'Beautiful $$PACK$$'}))
    }*/

    return(
      <div className={st.common}>
          <div className={st.title}>{title}</div>
         <button onClick={callback}
             className={st.button}>{nameButton}</button>
      </div>
  )
}