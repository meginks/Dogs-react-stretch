import React from "react";

function Dog (props) {
    return (
        <div className="dog-box">
        <img src={props.dog.message} />
        </div>
    )
}