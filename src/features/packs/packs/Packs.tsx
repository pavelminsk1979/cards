import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {selectIsLoggedIn} from "features/auth/authSelectors";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import st from 'features/packs/packs/Packs.module.css'
import {BlokNameAndButton} from "features/packs/packs/upperBlock/BlokNameAndButton";
import {SettingsBlock} from "features/packs/packs/settingsBlock/SettingsBlock";
import {useEffect} from "react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {packThunk} from "features/packs/packSlice";
import {
    selectCardPacks,
    selectPacksTotalCount,
    selectPage,
    selectPageCount
} from "features/packs/packSelectors";
import {Paginator} from "components/paginator/Paginator";
import {TableHeaders} from "features/packs/packs/tableHeaders/TableHeaders";
import {ContentTablePacks} from "features/packs/packs/contentTablePacks/ContentTablePacks";


export const Packs = () => {
    const dispatch = useAppDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn)

    const cardPacks = useSelector(selectCardPacks)

    const page = useSelector(selectPage) /*номер страницы которая пришла с сервера */

    const pageCount = useSelector(selectPageCount)  /* я определил что с сервера придет
    10 пакетов */

    const cardPacksTotalCount = useSelector(selectPacksTotalCount)  /* количество
    пакетов на сервере   1800*/

    const createPack = () => {
        dispatch(packThunk.createPack({name:'Beautiful $$PACK$$'}))
    }


    useEffect(() => {
        dispatch(packThunk.fetchPacks({}))
    }, [])


    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={st.common}>
            <BlokNameAndButton
                callback={createPack}
                title='Список КОЛОД'
                nameButton='Добавить колоду'/>

            <SettingsBlock/>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">

                    <TableHead>
                        <TableHeaders/>
                    </TableHead>

                    <ContentTablePacks cardPacks={cardPacks}/>

                </Table>
            </TableContainer>

            <Paginator
                countWithServerItems={cardPacksTotalCount}
                countItemsForOnePage={pageCount}
            numberPageWithServer={page}/>

            {!cardPacks.length &&
                <div className={st.message}>Колоды с данным именем не найдено. Измените параметры поиска</div>}
        </div>
    );
}

