import AuthActions from "../Actions/authActions";

const initialState = {
    currentUser: null
};

const combinedReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActions.MENU_OPEN_REQUEST:
            return {
                ...state,
                anchorEl: action.payload.eventValue
            }

        case AuthActions.MENU_CLOSE_REQUEST:
            return {
                ...state,
                anchorEl: null
            }

        case AuthActions.HOME_OPEN:
            return {
                ...state,
                home: true
            }

        case AuthActions.VIEW_TODO_SUCCESS:
            return {
                ...state,
                todo: action.payload.data,
                viewTodo: true
            }

        case AuthActions.CREATE_TODO_OPEN:
            return {
                ...state,
                create_todo_open: true
            }

        case AuthActions.CREATE_TODO_SUCCESS:
            return {
                ...state,
                createTodoSuccess: true
            }
        default:
            return state;
    }
}

export default combinedReducer;