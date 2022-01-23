import React from 'react'
import "./Collection.css"
import ImageNumberedText from "../../components/ImageNumberedText/ImageNumberedText"
import AllCollection from "../../components/AllCollection/AllCollection"
import FeaturedCollection from "../../components/FeaturedCollection/FeaturedCollection"



const index = () => {
    return (
        <div className = "collection_outer_container">
            <ImageNumberedText/>
            <FeaturedCollection/>
            <AllCollection/>
        </div>
    )
}

export default index
