import React, { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }){
  const [cart, setCart] = useState([]);

  const addBookToCart = (book) => {
    const listaActualizada = cart.find(
        (bookEnCarrito) => bookEnCarrito.id === book.id
    )
        ? cart.map((bookEnCarrito) => {
              if (bookEnCarrito.id === book.id) {
                  return {
                      ...bookEnCarrito,
                      quantity: bookEnCarrito.quantity + book.quantity,
                  };
              }
              return bookEnCarrito;
          })
        : [...cart, book];
    setCart(listaActualizada);
    console.log(">> elementos del carrito actualmente: ", listaActualizada);
};

  const removeBook = (book) =>{
    const listaActualizada = cart.find(            
      (bookEnCarrito) => ((bookEnCarrito.id === book.id) && (bookEnCarrito.quantity > 1))
    )
      ? cart.map((bookEnCarrito) => {
            return {
                ...bookEnCarrito,
                quantity: bookEnCarrito.quantity - 1,
            };
        })
      : cart.filter((bookEnCarrito) => (bookEnCarrito.id !== book.id))
    setCart(listaActualizada);
    console.log(">> elementos del carrito actualmente: ", listaActualizada);
  }

  const clear = () =>  {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addBookToCart, removeBook, clear}}>
      {children}
    </CartContext.Provider>
  )
}
