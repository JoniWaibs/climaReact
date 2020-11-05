import React from 'react'

function Clima({clima}){

    return(
        <div className="card-panel temperatura">
            <h2>Clima actual</h2>
            <p className="temperatura">Temperatura: {clima.tempe}</p>
            <p>Max:{clima.max}º</p>
            <p>Min:{clima.min}º</p>
            <p>Humedad:{clima.humedad}%</p>
        </div>
    )
}
export default Clima;