import React from 'react'
import Container from "@mui/material/Container";


import "./Datawall.css"
import Box from "./UpperDataWallBox/Box"
import LowerLeft from './LowerLeft/LowerLeft';
import LowerRight from './LowerRight/LowerRight';

const Datawall = () => {
    return (
        <div className = "datawall_container">
            <Container style = {{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div className = "upper_lower_datawall">
                    <div className = "upper_datawall">
                        <Box/>
                        <Box/>
                    </div>
                    <div className = "lower_datawall">
                        <LowerLeft/>
                        <LowerRight/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Datawall