import TableCell from "@mui/material/TableCell";
import Star from "@mui/icons-material/Star";
import st from "./Stars.module.css";
import StarBorder from "@mui/icons-material/StarBorder";
import React from "react";

type PropsType = {
    grade: number
}

export const Stars = ({grade}: PropsType) => {
    const state = [false, false, false, false, false]
    if (grade === 1) {
        (state.fill(true, 0, 1))
    }
    if (grade === 2) {
        (state.fill(true, 0, 2))
    }
    if (grade === 3) {
        (state.fill(true, 0, 3))
    }
    if (grade === 4) {
        (state.fill(true, 0, 4))
    }
    if (grade === 5) {
        (state.fill(true, 0, 5))
    }
    return (
        <TableCell  align="center">
            {state.map((el,index) => {
                return (
                    <span key={index}>
                        {el
                            ? <Star className={st.star}/>
                            : <StarBorder className={st.star}/>}
                    </span>
                )
            })}
        </TableCell>
    )
}
/*
{state.map((el)=>{
    return(
        el
            ?<Star className={st.star}/>
            :<StarBorder className={st.star}/>
    )
})}*/
