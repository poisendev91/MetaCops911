import React from 'react'
import "./TextImage.css"
import Skull from "../../../assets/4.png"
import NotesIcon from '@mui/icons-material/Notes';


const TextImage = (props) => {
    return (
        <div className="TextImage_container">
            <div className="TextImage_leftCol">
                <span style = {{color:"white" , backgroundColor:"#462366" , borderRadius:"50%" , position:"absolute" , padding:"5px 10px" , left:"-35%" , top:"-15%" , fontWeight:"600"}}>{props.idx}</span>
                <img src = {Skull} alt = "skull.png" width = "50px"/>
            </div>
            <div className="TextImage_rightCol">
                <p>{props.name}</p>
                <span>{props.cost}&nbsp;<NotesIcon style = {{backgroundColor:"#f8e8ff",color:"#a2b5cb" , borderRadius:"50%" , fontSize:"large"}}/></span>
            </div>
        </div>
    )
}

export default TextImage
