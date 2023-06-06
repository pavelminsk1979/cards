import {ChangeEvent, useRef} from "react";
import st from "features/packs/packs/modals/modalUpdatePack/ModalUpdatePack.module.css";
import * as React from "react";
import {packThunk} from "features/packs/packSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {CardsPackType} from "features/packs/packApi";



type PropsType = {
    packId:string
}
export const ButtonLoadCover = ({packId}:PropsType) => {
    const dispatch = useAppDispatch();

    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            console.log('file: ', file)

            const reader = new FileReader();

            reader.onloadend = () => {
                const file64 = reader.result as string
                const cardsPack:CardsPackType = {_id:packId,
                    deckCover:file64}
                dispatch(packThunk.updatePack({cardsPack}));
                console.log('file64: ', file64)
            }
            reader.readAsDataURL(file)
        }
    };

    return (
        <div>
            <button onClick={selectFileHandler}
                    className={st.buttonLoad}>Загрузить обложку</button>

            <input
                style={{display: 'none'}}
                ref={inputRef}
                type="file"
                onChange={uploadHandler}
            />
        </div>
    )
}

