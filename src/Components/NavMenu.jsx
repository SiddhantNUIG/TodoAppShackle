import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button, Paper, MenuItem, Menu, Toolbar, fade, IconButton, AppBar, withStyles, Typography } from "@material-ui/core";
import React, { Component, children } from 'react';
import styles from "./StyleHome";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { viewTodoPageOpen, createTodoPageOpen, menuOpenRequest, menuCloseRequest, homePageOpen }
    from "../Actions/authActions"
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavMenuView extends Component {
    state = {
        anchorEl: null
    }

    handleProfileMenuOpen = (event) => {
        event.preventDefault();
        const eventValue = event.currentTarget;
        this.props.menuOpenRequest(event.currentTarget);
    };

    handleMenuClose = () => {
        this.props.menuCloseRequest();
    };

    viewTodoOpen = (event) => {
        event.preventDefault();
        this.props.viewTodoPageOpen();
        this.props.history.push('/todoview');
    };

    createTodoOpen = (event) => {
        event.preventDefault();
        this.props.createTodoPageOpen();
        this.props.history.push('/create_todo');
    };
    homeOpen = (event) => {
        event.preventDefault();
        this.props.homePageOpen();
        this.props.history.push('/');
    }

    render() {
        const { classes, children } = this.props;
        const menuId = 'primary-search-account-menu';
        const renderMenu = (
            <Menu
                anchorEl={this.props.anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={!!this.props.anchorEl}
                onClose={this.handleMenuClose}
            >
                <Paper className={classes.navPaper}>
                    <MenuItem className={classes.closebtn} onClick={this.handleMenuClose}>x</MenuItem>
                    <MenuItem>
                        <div className={classes.navMenuUser}>
                            <label className={classes.navMenuUserName}>
                                {this.props.firstName}
                            </label>
                            <label className={classes.navMenuUserName}>
                                {this.props.lastName}
                            </label>
                        </div>
                    </MenuItem>
                    <MenuItem className={classes.navMenuButton} onClick={this.homeOpen}>Home</MenuItem>
                    <MenuItem className={classes.navMenuButton} onClick={this.viewTodoOpen}>View ToDo</MenuItem>
                    <MenuItem className={classes.navMenuButton} onClick={this.createTodoOpen}>Create ToDo</MenuItem>
                </Paper>
            </Menu >
        );

        return (
            <div>
                <AppBar position="static" style={{ backgroundColor: "#1682C9" }}>
                    <Toolbar>
                        <div className={classes.menu}>
                            <Typography variant="h6">
                                Shackle
                      </Typography>
                            <div className={classes.sectionDesktop}>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={this.handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {children}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        menuOpenRequest: (eventValue) => dispatch(menuOpenRequest(eventValue)),
        menuCloseRequest: () => dispatch(menuCloseRequest()),
        viewTodoPageOpen: () => dispatch(viewTodoPageOpen()),
        createTodoPageOpen: () => dispatch(createTodoPageOpen()),
        homePageOpen: () => dispatch(homePageOpen())
    }
}

const mapStateToProps = state => {
    return {
        anchorEl: state.auth.anchorEl,
        home: state.auth.home,
        viewTodo: state.auth.viewTodo,
        create_todo_open: state.auth.create_todo_open
    }
}

NavMenuView.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(NavMenuView)));