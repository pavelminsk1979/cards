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
import st from './Packs.module.css'
import {BlokNameAndButton} from "components/packs/upperBlock/BlokNameAndButton";
import {SettingsBlock} from "components/packs/settingsBlock/SettingsBlock";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const Packs = () => {
    const isLoggedIn = useSelector (selectIsLoggedIn)


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
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


/*
export const Packs = () => {
    const isLoggedIn = useSelector (selectIsLoggedIn)


    if ( !isLoggedIn ) {
        return <Navigate to={'/login'}/>
    }

    return(
        <div>

            <table>
            <thead>
            <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>Иван</td>
            <td>Иванов</td>
            <td>25</td>
            </tr>
            <tr>
            <td>Петр</td>
            <td>Петров</td>
            <td>30</td>
            </tr>
            </tbody>
            </table>

        </div>
    )
}*/
