import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {ChangeEvent, useState} from "react";

type PropsType = {
    valueAnswer:(value:number)=>void
}

export const BlockOptionAnswer=({valueAnswer}:PropsType)=> {

 /*   const [grade, setGrade] = useState(0);
    console.log(grade)*/

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        valueAnswer(+event.currentTarget.value);
    };

    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Варианты ответов</FormLabel>
            <RadioGroup
                onChange={handleChange}
            >
                <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Вобще не понимаю что к чему" />
                <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Слышал но не вспомню" />
                <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Сильно ошибся с ответом" />
                <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Подумал минуту и вспомнил" />
                <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="Сразу сказал правильный ответ" />
            </RadioGroup>
        </FormControl>
    );
}

