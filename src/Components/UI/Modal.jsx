import React from "react";
import ReactDom from 'react-dom'
import classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onhideCart}/>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement=document.getElementById('overlays')
const Modal = (props) => {
  return (
      <>
      {ReactDom.createPortal(<BackDrop  onhideCart={props.onhideCart}/>,portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
      
      </>
  )
};

export default Modal;
