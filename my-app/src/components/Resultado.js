import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component 
{
    render() 
    {
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elige Marca, Año y Tipo de Seguro' : 'El Total es: $';
        return (
            <div className="gran-total">
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition className="resultado" key={resultado} timeout={{enter: 500, exit: 500}}>
                        <span>{mensaje + resultado}</span>
                    </CSSTransition>    
                </TransitionGroup>
            </div>
        )
    }
}

export default Resultado;