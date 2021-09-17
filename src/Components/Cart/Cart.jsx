import React,{useContext} from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CartContext from '../../Store/cart-context'
const Cart = (props) => {
    const cartCtx=useContext(CartContext);
    const totalAmount=`Rs ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems=cartCtx.items.length>0;
    const CartItemAddHandler=(item)=>{
        cartCtx.addItem(item);
    }
    const CartItemRemoveHandler=(id)=>{
cartCtx.removeItem(id);
    }
        const cartItem=<ul className={classes["cart-items"]}>{cartCtx.items.map((item)=>
            <CartItem name={item.name} id={item.id} amount={item.amount} price={item.price}
            onRemove={CartItemRemoveHandler.bind(null,item.id)} onAdd={CartItemAddHandler.bind(null,item)}
            />
            )}</ul>
    
    return (
        <Modal  onhideCart={props.onhideCart}>
           {cartItem}
           <div className={classes.total}>
               <span>Total Amount</span>
               <span>{totalAmount}</span>
               </div> 
           <div className={classes.actions}>
           <button className={classes['button--alt ']} onClick={props.onhideCart}>Close</button>               
           {hasItems&&<button className={classes.button}>Order</button>}               
               </div> 
        </Modal>
    )
}
export default Cart
