import React from 'react'
import classes from './Modal.module.css'

import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHideCart}>
    </div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}
let portalElement = document.getElementById('overlays')

const Modal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} s />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal  