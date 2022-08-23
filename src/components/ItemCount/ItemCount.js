import { useState } from "react";
import { Button } from "react-bootstrap"

function ItemCount({stock, initial, onAddItemsToCart}){
    const [cantidad, setCantidad] = useState(initial)

    const onAdd = () => {
        if(cantidad > 0){
        onAddItemsToCart(cantidad);
        }
    }
    const onAddSelectedItems = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }
    const onSubSelectedItems = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return(
        <>        
        <div className="item-count">
            <div>
                <button onClick={onSubSelectedItems}>-</button>
                {cantidad}
                <button onClick={onAddSelectedItems}>+</button>
            </div>
            <Button onClick={onAdd} className="btn btn-success">Añadir al carrito</Button>
        </div>
        </>
    );
}

export default ItemCount;