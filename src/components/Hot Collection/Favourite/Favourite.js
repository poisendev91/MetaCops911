import React from "react";
import "./Favourite.css";

const Favourite = (props) => {
    return (
        <div>
            <label for={props.num} class="custom-checkbox">
                <input type="checkbox" id={props.num} />
                <i class="glyphicon glyphicon-star-empty"></i>
                <i class="glyphicon glyphicon-star"></i>
            </label>
        </div>
    );
};

export default Favourite;
