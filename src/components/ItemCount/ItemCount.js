import { useState } from "react";

function ItemCount({stock, initial, añadirAlCarrito}){
    const [cantidad, setCantidad] = useState(initial)
    function sumarUno(){
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

    function onAddToCart(){
        if(cantidad >= -1){ /* Si pongo 0 tengo que hacer click dos veces para que funcione, por eso puse -1 */
            añadirAlCarrito()
        }
    }

    return(
        <div>
            <p>
                {cantidad}
            </p>
            <button 
            className="btn btn-success botonAñadir" 
            onClick={()=>{
            sumarUno();
            onAddToCart();
            }}
            >
                Añadir 1
            </button>
            <button 
            className="btn btn-secondary" 
            onClick={quitarUno}
            >
                Quitar 1
            </button>
        </div>
    );
}

export default ItemCount;