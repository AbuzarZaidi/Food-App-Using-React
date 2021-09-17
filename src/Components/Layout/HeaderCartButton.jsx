import {useContext,useEffect,useState} from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../Store/cart-context'
const HeaderCartButton = (props) => {
    const[buttonIsHightLighted,setButtonIsHightLighted]=useState(false);
    const cartCtx=useContext(CartContext);
    const {items}=cartCtx;
    const numberOfCartItem=items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
    
    const btnClasses=`${classes.button} ${buttonIsHightLighted?classes.bump:""}`;
    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setButtonIsHightLighted(true);
      const timer=  setTimeout(()=>{
            setButtonIsHightLighted(false)
        },300)
        return()=>{
            clearTimeout(timer);
        }
    },[items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
<span className={classes.icon}><CartIcon/></span>
<span>Your Cart</span>
<span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    )
}

export default HeaderCartButton
