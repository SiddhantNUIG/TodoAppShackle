import React, { Component } from "react";
import {
    Paper,
    Grid,
    Typography,
    TextField,
    Button,
    Link,
    ThemeProvider
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createRequest } from "../Actions/authActions";
import { Redirect } from "react-router-dom";
import NavMenuView from "./NavMenu"
import styles from "./StyleHome";

class TodoCreateView extends Component {
    state = {
        desc: "",
        createdby: ""
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.createRequest({
            desc: this.state.desc,
            createdby: this.state.createdby
        });
    };

    handleChange = ({ target: { id, value } }) =>
        this.setState({ [id]: value });

    validate = () =>
        this.state.desc.length > 0 && this.state.createdby.length > 0;

    render() {
        const { classes, createRequest } = this.props;
        const { desc, createdby } = this.state;

        if (this.props.createTodoSuccess) {
            return <Redirect to="/todoview" />;
        }

        return (
            <NavMenuView>
                <div className={classes.root}>
                    <form onSubmit={this.handleSubmit}>
                        <Paper className={classes.paper}>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="stretch"
                                spacing={4}
                            >
                                <Grid item align="center">
                                    <Typography className={classes.title} variant="h4">Create Todo</Typography>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    spacing={2}
                                    direction="column"
                                    className={classes.formContainer}
                                >
                                    <Grid item>
                                        <TextField
                                            className={classes.textfield}
                                            id="desc"
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                            label={"Description"}
                                            onChange={this.handleChange}
                                            value={desc}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            className={classes.textfield}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                            id="createdby"
                                            label={"created by"}
                                            value={createdby}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item align="center">
                                    <Button
                                        className={classes.button}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={!this.validate()}
                                    >
                                        Create TODO
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                </div>
            </NavMenuView>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createRequest: ({ desc, createdby }) =>
        dispatch(createRequest({ desc, createdby }))
});

TodoCreateView.propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        anchorEl: state.auth.anchorEl,
        home: state.auth.home,
        viewTodo: state.auth.viewTodo,
        createTodoSuccess: state.auth.createTodoSuccess
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(TodoCreateView));
