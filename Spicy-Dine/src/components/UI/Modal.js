import React from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const BackDrop = (props) =>{
    return <div className={classes.backdrop} />
}

const ModalOverlay = (props) =>{
    return <div className={classes.modal}>
        <div className={classes.content}> {props.children} </div>
    </div>
}
const Modal = (props) => {
    const portalElement = document.getElementById('overlays')
    return (
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop />, portalElement)}
           
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </React.Fragment>
    )
}

export default Modal
