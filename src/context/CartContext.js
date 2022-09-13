import React, { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }){
  const [cart, setCart] = useState([]);

  const sumarTotal = (cart) => {
    let total = 0
    cart.forEach(book => total += book.precio * book.quantity)
    return total
  }

  //Para la cantidad total en el CartWidget
  const cantidadTotalEnCarrito = (cart) => {
    let cantidad = 0
    cart.forEach((book) =>{
      cantidad += book.quantity
    })
    return cantidad
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
    <CartContext.Provider value={{ cart, addBookToCart, removeBook, clear, sumarTotal, cantidadTotalEnCarrito}}>
      {children}
    </CartContext.Provider>
  )
}
