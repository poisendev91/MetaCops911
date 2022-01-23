import React from 'react'

import "./Box.css"

const Box = (props) => {
    return (
        <div style = {{backgroundColor : '#1c1929' , width: '150px' , padding: '10px' , borderRadius:"10px"}} className = "box_attri">
            <small style={{ color: "#7c8a8e" }}>{props.title}</small>
            <p style={{ color: "white" }}>{props.name}</p>
            <p style={{ color: "red" , fontSize:"larger" }}>{props.trait}</p>
        </div>
    )
}

export default Box
