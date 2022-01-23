import React from 'react'
import './ImageNumberedText.css'
import Container from "@mui/material/Container";
import TextImage from "./TextImage/TextImage"
import Skull from "../../assets/4.png"

const data = [
    {
        name : "Meerkat Millionaires C",
        image : {Skull},
        cost : "81.2K"
    },
    {
        name : "Meerkat Millionaires C",
        image : {Skull},
        cost : "81.2K"
    },
    {
        name : "Meerkat Millionaires C",
        image : {Skull},
        cost : "81.2K"
    },
    {
        name : "Meerkat Millionaires C",
        image : {Skull},
        cost : "81.2K"
    },
    {
        name : "Meerkat Millionaires C",
        image : {Skull},
        cost : "81.2K"
    },
    {
        name : "Meerkat Millionaires C",
        image : {Skull},
        cost : "81.2K"
    },
    {
        name : "Meerkat Millionaires C",
        image : {Skull},
        cost : "81.2K"
    },
    {
        name : "Meerkat Millionaires C",
        image : {Skull},
        cost : "81.2K"
    },
]




const ImageNumberedText = () => {
    return (
        <Container>
            <h1 className="ImageNumberedText_heading">Top collection in 7 days</h1>
            <div className = "ImageNumberedText_items">
                {data.map((item , index)=>(
                    <TextImage name = {item.name} img = {item.image} idx = {index} cost = {item.cost} />
                ))}
            </div>
        </Container>
    )
}

export default ImageNumberedText
