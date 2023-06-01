import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {selectIsLoggedIn} from "features/auth/authSelectors";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import st from 'features/packs/packs/Packs.module.css'
import {SettingsBlock} from "features/packs/packs/settingsBlock/SettingsBlock";
import {useEffect, useState} from "react";
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
import {BasicModal} from "components/basicModal/BasicModal";
import {ModalCreatPack} from "features/packs/packs/modals/modalCreatPack/ModalCreatPack";


export const Packs = () => {
    const dispatch = useAppDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn)

    const cardPacks = useSelector(selectCardPacks)

    const page = useSelector(selectPage)

    const pageCount = useSelector(selectPageCount)

    const cardPacksTotalCount = useSelector(selectPacksTotalCount)



    const [flagModal, setFlagModal] = useState('') /*какая из трех модалок покажется */

    const [positionModal, setPositionModal] = useState(false);

    const handlerButtonCreatePack = () => {
        setPositionModal(true)
        setFlagModal('create')
    }

    useEffect(() => {
        dispatch(packThunk.fetchPacks({}))
    }, [])


    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={st.common}>

            <BasicModal closeModal={setPositionModal}
                        openModal={positionModal}>
                {flagModal==='create'&&<ModalCreatPack closeModal={setPositionModal}/>}
                {flagModal==='update'&&<div>#7kfkhgkhg</div>}
             {/*   {flag ===1 &&<ModalCreatPack closeModal={setPositionModal}/>}
                {flag ===2 &&<ModalCreatPack closeModal={setPositionModal}/>}
                <ModalCreatPack closeModal={setPositionModal}/>*/}

            </BasicModal>

            <div className={st.blokNameAndButton}>
                <div
                    className={st.title}>
                    Список КОЛОД
                </div>
                <button
                    onClick={handlerButtonCreatePack}
                        className={st.button}>
                    Добавить колоду
                </button>
            </div>

        {/*    <BlokNameAndButton
                setFlagShowModal={setFlagModal}
                openModalCreatePack={setPositionModal}
                title='Список КОЛОД'
                nameButton='Добавить колоду'/>*/}

            <SettingsBlock/>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableHeaders/>
                    </TableHead>

                    <ContentTablePacks
                        setFlagModal={setFlagModal}
                        openModallUpdatePack={setPositionModal}
                        cardPacks={cardPacks}/>

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

