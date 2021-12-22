import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../actions";

const initialState = {
    credentials: {
        email: '',
        password: '',
    },
    loggingIn: false,
    loginError: '',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case (LOGIN_START):
                return ({
                    ...state,
                    credentials: {},
                    loggingIn: true,
                    loginError: '',
                });
        case (LOGIN_SUCCESS):
                return ({
                    ...state,
                    credentials: action.payload,
                    loggingIn: false,
                    loginError: '',
                });
            case (LOGIN_FAIL):
                return ({
                    ...state,
                    credentials: {},
                    loggingIn: false,
                    loginError: action.payload,
                });
            case (LOGOUT):
                return ({
                    ...state,
                    credentials: {},
                    loggingIn: false,
                    loginError: '',
                });
            default:
                return (state);
        };
};

export default loginReducer;