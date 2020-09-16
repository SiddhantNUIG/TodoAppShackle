const AuthActions = {
    CASE_CONFIRM_CLICKED: "CASE_CONFIRM_CLICKED",
    MENU_OPEN_REQUEST: "MENU_OPEN_REQUEST",
    MENU_CLOSE_REQUEST: "MENU_CLOSE_REQUEST",
    CREATE_TODO_OPEN: "CREATE_TODO_OPEN",
    VIEW_TODO_OPEN: "VIEW_TODO_OPEN",
    VIEW_TODO_SUCCESS: "VIEW_TODO_SUCCESS",
    CREATE_TODO_SUCCESS: "CREATE_TODO_SUCCESS",
    HOME_OPEN: "HOME_OPEN",
    CREATE_TODO_REQ_OPEN: "CREATE_TODO_REQ_OPEN"
};

export const menuOpenRequest = (eventValue) => ({
    type: AuthActions.MENU_OPEN_REQUEST,
    payload: { eventValue }
});

export const menuCloseRequest = () => ({
    type: AuthActions.MENU_CLOSE_REQUEST
});

export const createTodoPageOpen = () => ({
    type: AuthActions.CREATE_TODO_OPEN
});

export const viewTodoPageOpen = () => ({
    type: AuthActions.VIEW_TODO_OPEN
});

export const todoViewSuccessful = todo => ({
    type: AuthActions.VIEW_TODO_SUCCESS,
    payload: todo
});

export const createRequest = ({ description, createdby }) => ({
    type: AuthActions.CREATE_TODO_REQ_OPEN,
    payload: { description, createdby }
});

export const todoCreateSuccessful = () => ({
    type: AuthActions.CREATE_TODO_SUCCESS
});


export const homePageOpen = () => ({
    type: AuthActions.HOME_OPEN
});

export default AuthActions;