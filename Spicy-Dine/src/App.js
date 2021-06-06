import React,{useState} from 'react'
import CartProvider from './store/CartProvider'
import Header from './components/Layouts/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () =>{
    setCartIsShown(true)
  }
  const hideCardHandler = () =>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown &&<Cart onClose={hideCardHandler} />}
     <Header onShow={showCartHandler} />
     <main>
        <Meals />
     </main>
    </CartProvider>
  );
}

export default App;
