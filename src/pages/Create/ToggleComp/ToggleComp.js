import React from 'react'
import "./ToggleComp.css"
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const ToggleComp = (props) => {
    return (
        <div className="toggle_comp_container">
            <div className="toggle_comp_left_col">
                {props.icon}
                <div>
                    <span style = {{fontSize:"16px" , fontWeight:"bold"}}>{props.name}</span>
                    <p style = {{fontSize:"14px"}}>{props.content}</p>
                </div>
            </div>
            <div className="toggle_comp_right_col">
                <Switch/>
            </div>
        </div>
    )
}

export default ToggleComp
