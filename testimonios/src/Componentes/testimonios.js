import React from 'react'
import '../style/Testimonio.css'
function Testimonio(props) {
    return (
        <div className='content-testimonio'>
            <img className='content-img'
                  src={ require(`../imagenes/testimonio-${props.imagen}.png`)}
                  alt='Foto de emma ' /> 
            <div className='content-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'> {props.cargo} en <strong>{props.empresa}</strong> </p>
                <p className='texto-testimonio'>"{props.testimonio}" </p>
                </div>     
        </div>
    )
}

export default Testimonio;