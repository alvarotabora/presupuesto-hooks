import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props)
{
    const { guardarGasto, guardarCrearGasto } = props;

    //State
    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarcantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = (e) =>
    {
        e.preventDefault();

        //Validar
        if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '')
        {
            guardarError(true);
            return;
        }

        
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        //Pasar gasto a componente principal        
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //Eliminar Alerta
        guardarError(false);

        //Reset form
        guardarNombreGasto('');
        guardarcantidadGasto('');
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Todos los datos son requeridos o Presupuesto incorrecto." /> : null}
            
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="ej. Transporte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="ej. 300"
                    onChange={e => guardarcantidadGasto(parseInt(e.target.value, 10))}
                    value={cantidadGasto}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto" />
        </form>
    )
}

export default Formulario;