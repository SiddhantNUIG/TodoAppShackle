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
import { viewTodoPageOpen } from "../Actions/authActions"


class TodoView extends Component {

    componentDidMount() {
        this.props.viewTodoPageOpen();
    }

    render() {
        const { classes } = this.props;
        const todoState = this.props.todo;
        //console.log(this.props.todo)
        return (
            <NavMenuView>
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
                                <Typography className={classes.title} variant="h4">Todo App Tracker</Typography>
                            </Grid>
                            <Grid item align="center">
                                {todoState.map((t, idx) => {
                                    return (
                                        <div key={t._id} style={{ flex: 1, flexDirection: "row", padding: "20px" }}>
                                            <input
                                                type="checkbox"
                                                // onChange={() => updateDone(idx)}
                                                checked={t.done}
                                            />
                                            <Grid><b>Description of the task :</b> {t.description}</Grid>
                                            <Grid><b>Task created by :</b> {t.createdBy}</Grid>
                                        </div>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </NavMenuView>
        )
    }
}

TodoView.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        viewTodoPageOpen: () => dispatch(viewTodoPageOpen())
    };
}

const mapStateToProps = state => {
    return {
        anchorEl: state.auth.anchorEl,
        home: state.auth.home,
        viewTodo: state.auth.viewTodo,
        todo: state.auth.todo

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoView));