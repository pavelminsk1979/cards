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
import {ModalUpdatePack} from "features/packs/packs/modals/modalUpdatePack/ModalUpdatePack";
import {ModalDeletePack} from "features/packs/packs/modals/modalDetetePack/ModalDetetePack";





export const Packs = () => {
    const dispatch = useAppDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn)

    const cardPacks = useSelector(selectCardPacks)

    const page = useSelector(selectPage)

    const pageCount = useSelector(selectPageCount)

    const cardPacksTotalCount = useSelector(selectPacksTotalCount)




    const [flagModal, setFlagModal] = useState('') /*какая из трех модалок покажется */

    const [positionModal, setPositionModal] = useState(false);

    const [valuesForUpdateAndDeletePack,setValues] =useState({
        packId:'',packName:''})

    const handlerButtonCreatePack = () => {
        setPositionModal(true)
        setFlagModal('create')
    }
    const clickButtonUpdatePack = (packId:string,packName:string) => {
        setPositionModal(true)
        setFlagModal('update')
        setValues({...valuesForUpdateAndDeletePack,packId,packName})
    }
    const clickButtonDeletePack = (packId:string) => {
        setPositionModal(true)
        setFlagModal('delete')
        setValues({...valuesForUpdateAndDeletePack,packId})
    }

    useEffect(() => {
        dispatch(packThunk.fetchPacks({}))
    }, [])


    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={st.common}>


            <BasicModal
                closeModal={setPositionModal}
                openModal={positionModal}>

                {flagModal === 'create' && <ModalCreatPack closeModal={setPositionModal}/>}

                {flagModal === 'update' && <ModalUpdatePack
                    stateForUpdatePack={valuesForUpdateAndDeletePack}
                    closeModal={setPositionModal}/>}

                {flagModal === 'delete' && <ModalDeletePack
                    stateForDeletPack={valuesForUpdateAndDeletePack}
                    closeModal={setPositionModal}/>}

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

            <SettingsBlock/>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableHeaders/>
                    </TableHead>

                    <ContentTablePacks
                        clickButtonUpdatePack={clickButtonUpdatePack}
                        cardPacks={cardPacks}
                        clickButtonDeletePack={clickButtonDeletePack}/>

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

