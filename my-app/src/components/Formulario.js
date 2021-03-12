import React, {Component} from'react';

class Formulario extends Component 
{
    //Refs: sirven para leer los valores introducidos dentro de los formularios

    constructor(props) 
    {
        super(props);
        this.marcaRef = React.createRef();
        this.yearRef = React.createRef();
        this.planBasicoRef = React.createRef();
        this.planCompletoRef = React.createRef();
    }

    cotizarSeguro = (e) => 
    {
        e.preventDefault();
        //Obtener los datos
        console.log(this.marcaRef.current.value);

        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';
        //Crear el objeto
        const infoAuto = 
        {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan  
        }
        console.log(infoAuto);
        //Enviarlo al componente principal 
        this.props.cotizarSeguro(infoAuto);
        //Limpiar el formulario
        e.currentTarget.reset();
    }
    render()
    {
        return(
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="Americano">Americano</option>
                        <option value="Europeo">Europeo</option>
                        <option value="Asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                    </select>    
                </div>

                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="Basico" ref={this.planBasicoRef}/> Básico
                    <input type="radio" name="plan" value="Completo" ref={this.planCompletoRef}/> Completo
                </div>

                <button type="submit" className="boton">cotizar</button>
            </form>
        ) 
    }
}
export default Formulario;