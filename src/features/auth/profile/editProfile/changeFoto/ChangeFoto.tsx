import React, {ChangeEvent} from "react";
import FlipCameraIos from "@mui/icons-material/FlipCameraIos";
import IconButton from "@mui/material/IconButton";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {authThunk} from "features/auth/authSlice";

export const ChangeFoto = () => {
    const dispatch = useAppDispatch();

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            console.log('file: ', file)

                const reader = new FileReader();

                reader.onloadend = () => {
                    const file64 = reader.result as string
                    dispatch(authThunk.editProfile({avatar:file64}));
                    console.log('file64: ', file64)
                }
                reader.readAsDataURL(file)
        }
    }
    return (
        <label>
            <input type="file"
                   onChange={uploadHandler}
                   style={{display: 'none'}}
            />
            <IconButton component="span">
                <FlipCameraIos />
            </IconButton>
        </label>
    )
}