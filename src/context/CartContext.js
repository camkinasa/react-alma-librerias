import React, { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }){
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const bookInCart = cart.find((book) => book.id == id)
    if(bookInCart){
      return true
    } else{
      return false
    }
  }

  const addBook = (book) =>{
    if(isInCart(book.id)){
        const newCart = cart.map((bookInCart) => {
          if(bookInCart.id == book.id){
            const copyBook = {...bookInCart}
            copyBook.cantidad += 1
            return copyBook
          }
        })
        setCart(newCart)
      } 
      else{
      setCart([...cart, {...book, cantidad: 1}])
      }
    }

  const removeBook = (id) =>{
    setCart(cart.filter((book) => book.id !== id)) // me crea un nuevo array con todos los libros que no poseen ese id
  }

  const clear = () =>  {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addBook, removeBook, clear}}>
      {children}
    </CartContext.Provider>
  )
}
