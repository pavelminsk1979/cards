import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import st from './BasicModal.module.css'
import {ReactNode} from "react";


type PropsType = {
    children: ReactNode
    openModal: boolean
    closeModal: (value: boolean) => void
}

export const BasicModal = ({openModal, closeModal, children}: PropsType) => {
    const handleClose = () => {
        closeModal(false)
    };

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={st.box}>
                {children}
            </Box>
        </Modal>

    );
}

