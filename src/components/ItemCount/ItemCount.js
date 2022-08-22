import { useState } from "react";
import { Button } from "react-bootstrap"


function ItemCount({stock, initial, onAddItemsToCart}){
    const [cantidad, setCantidad] = useState(initial)

    const onAdd = () => {
        console.log(`${cantidad} agregados al carrito!`);
        onAddItemsToCart(cantidad);
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
        <div>
            <div>
                <Button onClick={onSubSelectedItems}>-</Button>
                {cantidad}
                <Button onClick={onAddSelectedItems}>+</Button>
            </div>
            <Button onClick={onAdd} >Añadir al carrito</Button>
        </div>
        </>
    );
}

export default ItemCount;