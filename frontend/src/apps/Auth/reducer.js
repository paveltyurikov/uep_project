import * as actionTypes from './actiontypes';
import {getSessionId} from 'utils/index';


const authInitialState =
    {
        apiLoading: false,
        isAuthenticated: getSessionId(),
        errors: {},
        sessionId: getSessionId()
    };

export default function authReducer(state = authInitialState, action) {

    switch (action.type) {

        case actionTypes.LOADING: {
            return {
                ...state,
                apiLoading: action.bool,
            };
        }
        case actionTypes.LOGIN: {
            return {
                ...state,
                apiLoading: true,
                error: ''
            };
        }
        case actionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                apiLoading: false,
            };
        }
        case actionTypes.LOGIN_FAILED: {

            const error = JSON.parse(action.data) ? {password:JSON.parse(action.data).error} : {password: 'Ошибка'};
            return {
                ...state,
                isAuthenticated: false,
                apiLoading: false,
                requestErrors: error,
            };
        }
        case actionTypes.LOGOUT: {
            return {
                ...state,
                apiLoading: true,
            };
        }
        case actionTypes.LOGOUT_SUCCESS: {
            return {
                ...state,
                isAuthenticated: false,
                apiLoading: true,
            };
        }
        case actionTypes.CLEAR_REQUEST_ERRORS:{
            return{
                ...state,
                requestErrors: {}
            }
        }
        default:
            return state;
    }
}
