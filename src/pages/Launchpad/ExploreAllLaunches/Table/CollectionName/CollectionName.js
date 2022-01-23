import React from 'react'
import "./CollectionName.css"
import Collection3 from '../../../../../assets/collection3.png'

const CollectionName = (props) => {
    return (
        <div className= "collection_name_container">
            <img src = {Collection3} alt = "" width = "40px"/>
            <div className= "text">
                Paragon Art Gen1
            </div>
        </div>
    )
}

export default CollectionName
