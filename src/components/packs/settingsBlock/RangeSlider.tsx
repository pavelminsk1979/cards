import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import st from './RangeSlider.module.css'

function valuetext(value: number) {
    return `${value}°C`;
}

export function RangeSlider() {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className={st.slider}>
            <input type="text" value={value[0]}/>
            <Box sx={{width: 250}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    /*valueLabelDisplay="auto"*/
                    getAriaValueText={valuetext}
                />
            </Box>
            <input type="text" value={value[1]}/>
        </div>
    );
}