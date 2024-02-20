import React from "react"
import "../css/navbar.css"


export default function Navbar(){
    return(
        <>
            <div className="container-nav">
                <div className="inner-content">
                    <img src="../src/assets/world.png" alt="world" id="world-logo"/>
                    <h1 className="open-sans-title">my travel journal</h1>
                </div>
            </div>
        </>
    )
}