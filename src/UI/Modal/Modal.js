import classes from './Modal.module.css'
import React from 'react'

const Modal = (props) => {
    return (
        <>
        <div className={classes.backdrop}></div>
          <div  className={classes.modal}>
            {props.children}
        </div>
        </>
      
    )
}

export default Modal
