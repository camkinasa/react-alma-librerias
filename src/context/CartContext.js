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
    const indice = cart.indexOf(book)
    if(book.quantity > 1){
      book.quantity--
      const newBook = {...book}
      const newCart = [...cart]
      newCart[indice] = newBook
      setCart(newCart)
    } else{
      const newCart = cart.filter((bookEnCarrito) => (bookEnCarrito.id !== book.id))
      setCart(newCart)
    }
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
