import React from "react";

function Dog (props) {
    return (
        <div className="dog-box">
        <h1>Dog</h1>
        <img src={props.dog.message} alt="dog image"/>
        </div>
    )
}

export default Dog;