import React from "react";

export default function Header() {
    return (
        <div className="header">
            <div className="title">
            <img src={require("../images/troll-face.png")} />
            <h1>Meme Generator</h1>
            </div>
            <h4>React Course - Project 3</h4>
        </div>
    )
}