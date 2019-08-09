import React, { Fragment, useState } from 'react';
import Error from './Error';

function Pregunta(props)
{
    const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Validar presupuesto
    const agregarPresupesto = e =>
    {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad))
        {
            guardarError(true);

            return;
        }

        //Si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje="Presupesto incorrecto." /> : null}

            <form onSubmit={agregarPresupesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placerholder="Agrega tu Presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width" value="definir presupuesto"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta;