import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import st from 'features/packs/packs/settingsBlock/rangeSlider/RangeSlider.module.css'
import {useSelector} from "react-redux";
import {
    selectArrayMinMaxCorrectValueSlice,
    selectArrayMinMaxValueSlice, selectFlagResetSlider, selectMyId, selectPackNameInput, selectPage, selectSortPacks
} from "features/packs/packSelectors";
import {packActions, packThunk} from "features/packs/packSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";


export function RangeSlider() {
    const dispatch = useAppDispatch();

    const arrayMinMaxValueSlice = useSelector(selectArrayMinMaxValueSlice)

    const flagResetSlider = useSelector(selectFlagResetSlider)

    const page = useSelector(selectPage)

    const sortPacks = useSelector(selectSortPacks)

    const packNameInput = useSelector(selectPackNameInput)

    const user_id = useSelector(selectMyId)


    const [value, setValue] = useState<number[]>([]);

    useEffect(() => {
        if(flagResetSlider){
            setValue(arrayMinMaxValueSlice)
            dispatch(packActions.resetValueSlider({arrayMinMaxValueSlice}))
        }
    }, [flagResetSlider])

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);

    }

    const sendDataSlider = () => {

        dispatch(packThunk.fetchPacks({page, min: value[0], max: value[1],sortPacks,packNameInput,user_id}))
    }

    useEffect(() => {
        if (!value.length || value[0] === 0 && value[1] === 0) {
            setValue(arrayMinMaxValueSlice)
        }
    }, [arrayMinMaxValueSlice])


    return (
        <div className={st.slider}>
            <div className={st.value}>
                {value[0]}
            </div>
            <Box sx={{width: 250}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChangeCommitted={sendDataSlider}
                    onChange={handleChange}/>
            </Box>
            <div className={st.value}>
                {value[1]}
            </div>
        </div>
    );
}


