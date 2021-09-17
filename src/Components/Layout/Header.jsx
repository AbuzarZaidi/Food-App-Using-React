import React from 'react'
import MealsImage from '../../assets/pakistanimeal.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'
const Header = (props) => {
    return (
        <>
        <header className={classes.header}>
            <h1>Pak Cuisine</h1>
             <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage}  />
        </div>
        </>
    )
}

export default Header
