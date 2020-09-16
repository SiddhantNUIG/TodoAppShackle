import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Paper,
    Grid,
    Typography,
    TextField,
    Button,
    Link,
    ThemeProvider
} from "@material-ui/core";
import styles from "./StyleHome";
import { withStyles } from "@material-ui/core/styles";
import NavMenuView from "./NavMenu";

class HomeView extends Component {
    render() {
        const { classes } = this.props;
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
                            <h3>
                                Home
                            </h3>
                        </Grid>
                    </Grid>
                </Paper>
            </div >
        )
    }
}

HomeView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeView);