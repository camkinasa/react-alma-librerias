import React, { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }){
  const [cart, setCart] = useState([]);

  const multiplicar = (num1, num2) => {
    return num1 * num2
  }

  const sumarTotal = (cart) => {
    const valores = []
    cart.forEach((libro) => {
      const op = multiplicar(libro.quantity, libro.precio)
      valores.push(op)
    })
    const total = valores.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual
    }, 0)
    return total
  }

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
    setCart(listaActualizada);;
};

  const removeBook = (book) =>{
    // Eliminar de a un item, no me estaría saliendo aún
/*     const listaActualizada = cart.find(            
      (bookEnCarrito) => ((bookEnCarrito.id === book.id) && (bookEnCarrito.quantity > 1))
    )
      ? cart.map((bookEnCarrito) => {
            return {
                ...bookEnCarrito,
                quantity: bookEnCarrito.quantity - 1,
            };
        })
      : cart.filter((bookEnCarrito) => (bookEnCarrito.id !== book.id))
    setCart(listaActualizada); */
      const newCart = cart.filter((bookEnCarrito) => (bookEnCarrito.id !== book.id))
      setCart(newCart)
      }


  const clear = () =>  {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addBookToCart, removeBook, clear, sumarTotal}}>
      {children}
    </CartContext.Provider>
  )
}
