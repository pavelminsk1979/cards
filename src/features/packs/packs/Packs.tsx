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
import {selectCardPacks} from "features/packs/packSelectors";
import {Pagingtor} from "components/paginator/Pagingtor";
import {TableHeaders} from "features/packs/packs/tableHeaders/TableHeaders";
import School from "@mui/icons-material/School";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import {TableColumnActions} from "features/packs/packs/inTableColumnActions/TableColumnActions";


export const Packs = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const cardPacks = useSelector(selectCardPacks)

    useEffect(() => {
        dispatch(packThunk.fetchPacks({}))
    }, [])


    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={st.common}>
            <BlokNameAndButton
                title='Список КОЛОД'
                nameButton='Добавить колоду'/>

            <SettingsBlock/>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableHeaders/>
                    </TableHead>
                    <TableBody className={st.tableBody}>
                        {cardPacks.map((pack) => (
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
                                <TableColumnActions packId={pack._id}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagingtor/>
            {!cardPacks.length && <div className={st.message}>Колоды с данным именем не найдено. Измените параметры поиска</div>}
        </div>
    );
}

