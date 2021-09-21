import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal= (props) =>{
    return(
        <>
        <div className={classes.backdrop} onClick={props.onDismiss}>
        <Card className={classes.modal}>
            <header className={classes.header}>
            <h3>{props.errorTitle}</h3>
            </header>
            <div className={classes.content}>
            <p>{props.errorMessage}</p>
            </div>
            <footer className={classes.actions}>
            <Button onClick={props.onDismiss}>Okay</Button>
            </footer>
        </Card>
        </div>
        </>
    )
}

export default ErrorModal;