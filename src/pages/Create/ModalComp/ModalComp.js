import React from 'react'
import "./ModalComp.css"
import Helper from "./Helper"

const ModalComp = (props) => {
    return (
        <div className="modal_comp_container">
            <div className="modal_comp_left_col">
                {props.icon}
                <div>
                    <span style = {{fontSize:"16px" , fontWeight:"bold"}}>{props.name}</span>
                    <p style = {{fontSize:"14px"}}>{props.content}</p>
                </div>
            </div>
            <div className="modal_comp_right_col">
                <Helper/>
            </div>
        </div>
    )
}

export default ModalComp
