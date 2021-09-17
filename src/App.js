import React,{useState} from 'react'
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from './Store/CartProvider';
function App() {
  const [CartIsShown, setCartISShown] = useState(false)
  const showCartHandler=()=>{
    setCartISShown(true);
  }
  const hideCartHandler=()=>{
    setCartISShown(false);
  }
  return (
    <CartProvider>
    {CartIsShown&&<Cart onhideCart={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
     <Meals/>
     </main>
     </CartProvider>
  );
}

export default App;
