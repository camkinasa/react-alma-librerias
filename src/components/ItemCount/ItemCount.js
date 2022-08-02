import { useState } from "react";

function ItemCount({stock, initial}){
    const [cantidad, setCantidad] = useState(initial)
    function añadirUno(){
        if((cantidad < stock) && (cantidad >= 0) ){
            setCantidad(cantidad + 1)
        } else{
            alert("Lo sentimos, ese es el stock máximo")
        }
    }

    function quitarUno(){
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        } else{
            alert("Lo sentimos, no existe stock de números negativos")
        }

    }

    return(
        <div>
            <p>
                {cantidad}
            </p>
            <button class="btn btn-success botonAñadir" onClick={añadirUno}>Añadir 1</button>
            <button class="btn btn-secondary" onClick={quitarUno}>Quitar 1</button>
        </div>
    );
}

export default ItemCount;