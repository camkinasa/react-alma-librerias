import React, { useState } from "react";

export const CartContext = React.createContext([]);

export default function CartContextProvider({ children }){
  const [cart, setCart] = useState([]);
  const [cantInCart, setCantInCart] = useState(0)
  const [subtotal, setSubtotal] = useState(0)

  const isInCart = (id) => {
    const bookInCart = cart.find((book) => book.id === id)
    if(bookInCart){
      return true
    } else{
      return false
    }
  }

  const addBook = (book) =>{
    setCantInCart(cantInCart + 1)
    if(isInCart(book.id)){
        const newCart = cart.map((bookInCart) => {
            if(bookInCart.id === book.id){
                setCantInCart(cantInCart + 1)
                return cantInCart
            } else{
                return bookInCart
            }
        })
        setSubtotal(book.precio * cantInCart) //Creo que esto está mal porque no tengo un contador individual de libros en cantInCart, pero lo dejo así por ahora y después lo modifico.
        setCart(newCart)
    } else{
        setCart([...cart, book])
    }
  }

  const removeBook = (id) =>{
    const libroRemoved = cart.find((book) => book.id === book)
    setSubtotal(subtotal - libroRemoved.precio * cantInCart) //Creo que esto está mal porque no tengo un contador individual de libros en cantInCart, pero lo dejo así por ahora y después lo modifico.
    setCart(cart.filter((book) => book.id !== id)) // me crea un nuevo array con todos los libros que no poseen ese id
    //Setear el nuevo setCantInCard cuando haga el contador individual
  }

  const clear = () =>  {
    setCart([])
    setCantInCart(0)
    setSubtotal(0)
  }

  return (
    <CartContext.Provider value={{ cart, addBook, removeBook, clear, cantInCart, subtotal}}> {/* No sé por qué las dobles llaves */}
        {children}
    </CartContext.Provider>
  )
}
