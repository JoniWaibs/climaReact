import React,{  Fragment, useState} from 'react'
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Clima from './Components/Clima'

function App() {

  //state que almacena los datos del clima
  const [ clima , setClima ]  = useState("")

  const APIKEY = '56925de9fb9721479c49f31611375d81'
  

  const consultarAPI = async (ciudad , pais) => {

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIKEY}`)
    .then( res => {
      return res.json()
    })
    .then( data => {
      //hago la conversion
      converse(data.main)
    })
  }
  //funcion que hace la conversion y llena el state con los datos
  function converse(data){
    const {temp , humidity, temp_max , temp_min } = data

    let min =( temp_min -  273.15).toFixed(1)
    let max = ( temp_max -  273.15).toFixed(1)
    let tempe = ( temp -  273.15).toFixed(1)
    setClima({
      humedad:humidity,
      max,
      min,
      tempe,
    })
  }

  return (
    
    <Fragment>


      <Header/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario consultarAPI={consultarAPI}/>
            </div>
            <div className="col s12 m6">
              { clima !== "" ? <Clima clima={clima}/> : null  }
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;
