import React, {Component} from 'react';
import Header from  './Header';
import Formulario from './Formulario';
import {calcularMarca, obtenerDiferenciaAño, obtenerPlan} from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';


class App extends Component
{
  state =
    {
      resultado: "",
      datos: {}
    }
  cotizarSeguro = (datos) =>
  {
    const {marca, plan, year} = datos;
    // Agregar una base de 2000
   
    let resultado = 2000;
    // Obtener la diferencia de años
   
    const diferencia = obtenerDiferenciaAño(year);
    console.log(`La diferencia es ${diferencia}`);
   
    // Por casa año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    console.log(resultado);
   
    //Americano 15% Asiatico 5% y Europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;
   
    // el plan del auto, el básico incrementa el valor 20% y cobertura completa el 50%
    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    console.log(resultado);

    const datosAuto = 
    {
      marca: marca,
      plan: plan,
      year: year
    }

    this.setState({ resultado : resultado, datos : datosAuto })
  }
  render()

  {
    return(
      <div className="contenedor">
        <Header titulo="Cotizador de Seguro de Auto"/>
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
        <Resumen datos={this.state.datos} resultado={this.state.resultado} />
        <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    ) 
  }
}
export default App;
