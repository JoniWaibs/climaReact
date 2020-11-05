import React , { useState } from 'react'

function Formulario({consultarAPI}){

    //state que almacena errores
    const [ error , setError ] = useState(false)
    //state que almacena datos
    const [ data , setData ] = useState({
        ciudad:"",
        pais:"",
    })
    const { ciudad, pais } = data;
    //funcion que modifica el state de datoss
    function captureData(e){
        setData({ 
            ...data,
            [e.target.name] : e.target.value
        })
        
    }
    //valida que no haya datos vacios
    function validateAndSearch(e){
        e.preventDefault();
        if(  ciudad.trim() ==="" || pais.trim() ===""  ){
            setError(true)
            return;    
        }
        setError(false)
        //consultar a la api
        consultarAPI(ciudad , pais)
        
    }


    return(
        <form onSubmit={validateAndSearch}>
            { 
            error ? <div className="error col s12">  
                <p>Los campos no pueden estar vacios</p>
            </div> 
            :
            null 
            }
             
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={captureData}
                />
                <label htmlFor="ciudad">Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select 
                    name="pais"
                    onChange={captureData}
                >
                    <option value="">--Seleccione--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                
            </div>
            <div className="input-field col s12" >
                <button 
                type="submit"
                className="waves-effect waves-light blue darken-4 btn
                ">Buscar</button>
            </div>
        </form>
        
    )
}

export default Formulario;