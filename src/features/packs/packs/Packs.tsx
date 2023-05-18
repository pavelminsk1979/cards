import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {selectIsLoggedIn} from "features/auth/authSelectors";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import st from 'features/packs/packs/Packs.module.css'
import {BlokNameAndButton} from "features/packs/packs/upperBlock/BlokNameAndButton";
import {SettingsBlock} from "features/packs/packs/settingsBlock/SettingsBlock";
import {useEffect} from "react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {packThunk} from "features/packs/packSlice";
import {selectPacksState} from "features/packs/packSelectors";
import {Pagingtor} from "features/packs/packs/pagingator/Pagingtor";


export const Packs = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useSelector (selectIsLoggedIn)
    const packsState = useSelector (selectPacksState)

    useEffect(() => {
        const pageCount:number = 10  /*столько колод ожидаю с сервера при get запросе */
        const page:number = 1
        dispatch(packThunk.fetchPacks({pageCount,page}))
    }, [])


    if ( !isLoggedIn ) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={st.common}>
          <BlokNameAndButton/>
            <SettingsBlock/>
            <TableContainer component={Paper}>
                <Table  sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow className={st.tableHead}>
                            <TableCell>Наименование Колоды</TableCell>
                            <TableCell align="center">Карточки</TableCell>
                            <TableCell align="center">Последнее обновление</TableCell>
                            <TableCell align="center">Автор</TableCell>
                            <TableCell align="center">Действия</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={st.tableBody}>
                        {packsState.cardPacks.map((pack) => (
                            <TableRow
                                key={pack._id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {pack.name}
                                </TableCell>
                                <TableCell align="center">{pack.cardsCount}</TableCell>
                                <TableCell align="center">{pack.updated}</TableCell>
                                <TableCell align="center">{pack.user_name}</TableCell>
                                <TableCell align="center">{pack.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagingtor/>
        </div>
    );
}

