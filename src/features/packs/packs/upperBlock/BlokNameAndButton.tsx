import  React from 'react';
import st from 'features/packs/packs/upperBlock/BlokNameAndButton.module.css'
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {packThunk} from "features/packs/packSlice";

type BlokNameAndButtonType = {
    title:string
    nameButton:string
}


export const BlokNameAndButton = (props:BlokNameAndButtonType) => {
    const dispatch = useAppDispatch();

    const createPackHandler = () => {
        dispatch(packThunk.createPack({name:'Beautiful $$PACK$$'}))
    }

    return(
      <div className={st.common}>
          <div className={st.title}>{props.title}</div>
         <button onClick={createPackHandler}
             className={st.button}>{props.nameButton}</button>
      </div>
  )
}