import React, {Component} from 'react';
import Resultado from './Resultado'
import {primerMayuscula} from '../helper';

class Resumen extends Component
{

    
    mostrarResumen = () =>
    {
        const {marca, year, plan} = this.props.datos;
        if(!marca || !year || !plan) return null

        return (
            <div className="resumen">
                <h2>Resumen de Cotización</h2>
                <li>Marca: {primerMayuscula( marca )}</li>
                <li>Plan: {primerMayuscula( plan )}</li>
                <li>Año del auto: {primerMayuscula  ( year )}</li>
            </div>
        ) 
    }

    render()
    {


        //////////////////////////////////////////////////////////
        
        return(
         
            <div className="resul">
                {this.mostrarResumen()}
               {/* 
                
                <Resultado datos={this.props.datos} resultado={this.props.resultado} />
                */} 
            </div>

        ) 
    }
}

export default Resumen;