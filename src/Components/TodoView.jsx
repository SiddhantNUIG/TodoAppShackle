import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    Paper,
    Grid,
    Typography,
    TextField,
    Button,
    Link,
    ThemeProvider,
    List
} from "@material-ui/core";
import styles from "./StyleHome";
import { withStyles } from "@material-ui/core/styles";
import NavMenuView from "./NavMenu";

class TodoView extends Component {
    render() {
        const { classes } = this.props;
        console.log(this.props.todo)
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                        spacing={4}
                    >
                        <Grid item align="center">
                            <NavMenuView />
                        </Grid>
                        <Grid item align="center">
                            <label>Check the console</label>
                        </Grid>
                    </Grid>
                </Paper>
            </div>)
    }
}

TodoView.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        anchorEl: state.auth.anchorEl,
        home: state.auth.home,
        viewTodo: state.auth.viewTodo,
        todo: state.auth.todo

    }
}

export default connect(mapStateToProps)(withStyles(styles)(TodoView));