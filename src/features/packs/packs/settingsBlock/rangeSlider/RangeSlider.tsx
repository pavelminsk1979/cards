import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import st from 'features/packs/packs/settingsBlock/rangeSlider/RangeSlider.module.css'
import {useSelector} from "react-redux";
import {selectArrayMinMaxValueSlice} from "features/packs/packSelectors";




export function RangeSlider() {
    const arrayMinMaxValueSlice = useSelector(selectArrayMinMaxValueSlice)

    const [value, setValue] = React.useState<number[]>([]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    useEffect(()=>{
        setValue(arrayMinMaxValueSlice)
    },[arrayMinMaxValueSlice])

    return (
        <div className={st.slider}>
            <div className={st.value}>
                {value[0]}
            </div>
            <Box sx={{width: 250}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}/>
            </Box>
            <div className={st.value}>
                {value[1]}
            </div>
        </div>
    );
}