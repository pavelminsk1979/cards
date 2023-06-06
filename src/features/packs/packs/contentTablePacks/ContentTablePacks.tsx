import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {NavLink, useNavigate} from "react-router-dom";
import {TableColumnActions} from "features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions";
import * as React from "react";
import {CardPacksType} from "features/packs/packApi";
import st from "./ContentTablePacks.module.css";
import TableBody from "@mui/material/TableBody";
import {useSelector} from "react-redux";
import {selectMyIdForCheck} from "features/packs/packSelectors";
import {cardThunk} from "features/cards/cardSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import fotoCover from 'image/2w.jpg'


type PropsType = {
    cardPacks: CardPacksType[]
    clickButtonUpdatePack: (packId: string, packName: string) => void
    clickButtonDeletePack: (packId: string) => void
}

export const ContentTablePacks = ({clickButtonDeletePack, cardPacks, clickButtonUpdatePack}: PropsType) => {
    const dispatch = useAppDispatch();

    const myIdForCheck = useSelector(selectMyIdForCheck)

    const navigate = useNavigate()

    const clickButtonLearnPack = (packId: string) => {
        dispatch(cardThunk.fetchCards({cardsPack_id: packId, pageCount: 80}))
        navigate('/learn')
    }

    return (
        <TableBody className={st.tableBody}>
            {cardPacks.map((pack) => (
                <TableRow
                    key={pack._id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                    <TableCell
                        className={st.cover}
                        style={{
                            backgroundImage: pack.deckCover
                                ? `url(${pack.deckCover})`
                                : `url(${fotoCover})`
                        }}
                        align="center"></TableCell>
                    <TableCell component="th" scope="row">
                        {
                            pack.cardsCount || pack.user_id === myIdForCheck
                                ? <NavLink
                                    className={st.namePack}
                                    to={'/pageCards/' + pack._id}>{pack.name}</NavLink>
                                : <div
                                    className={st.namePack}>{pack.name}</div>
                        }

                    </TableCell>
                    <TableCell align="center">{pack.cardsCount}</TableCell>
                    <TableCell align="center">{pack.updated}</TableCell>
                    <TableCell align="center">{pack.user_name}</TableCell>

                    <TableColumnActions
                        myIdForCheck={myIdForCheck}
                        clickButtonLearnPack={() => clickButtonLearnPack(pack._id)}
                        clickButtonUpdatePack={() => clickButtonUpdatePack(pack._id, pack.name)}
                        currentPack={pack}
                        clickButtonDeletePack={() => clickButtonDeletePack(pack._id)}/>
                </TableRow>
            ))}
        </TableBody>
    )
}
