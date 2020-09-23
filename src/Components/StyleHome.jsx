import React, { Component } from "react";

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minWidth: "100%",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center"
    },
    textfield: {
        width: "280px",
        marginLeft: "30px",
        marginRight: "30px",
        boxShadow: "5px 5px 5px #b3b3b3",
        borderRadius: 20,
        paddingLeft: "20px",
        color: "transparent"
    },
    formContainer: {
        marginTop: "-40px"
    },
    paper: {
        minWidth: "320px",
        padding: theme.spacing(2)
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between'
    },
    button: {
        borderRadius: 15,
        minWidth: "40%",
        height: "40px",
        backgroundColor: "#1261A0"
    }
});

export default styles;