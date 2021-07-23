import React from "react"
import chart from "../../../assets/images/chart.png"
import "./home.css"


export function Home(){
    return(
        <>
            <div id="main">
                <div id="chart-image-div">
                    <img id="chart-image" src={chart}></img>
                </div>
                <div id="text-div">
                    <h1 id="title-text">EXPENSE TRACKER</h1>
                    <h2 id="info-text">Gerencie suas finanças de forma prática e rápida e conte com gráficos úteis e ilustrativos </h2>

                </div>
            </div>
        </>
    )
}