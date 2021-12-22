import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../actions";

const initialState = {
    isLoggedIn: false,
    loginError: '',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case (LOGIN_SUCCESS):
                return ({
                    ...state,
                    isLoggedIn: true,
                    loginError: '',
                });
            case (LOGIN_FAIL):
                return ({
                    ...state,
                    isLoggedIn: false,
                    loginError: action.payload,
                });
            case (LOGOUT):
                return ({
                    ...state,
                    isLoggedIn: false,
                    loginError: '',
                });
            default:
                return (state);
        };
};

export default loginReducer;