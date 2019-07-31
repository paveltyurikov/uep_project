import * as actionTypes from './actiontypes';

import {makeActionCreator} from 'utils/index'


export const apiLoading = makeActionCreator(actionTypes.LOADING, 'bool');
export const authLogin = makeActionCreator(actionTypes.LOGIN, 'data');
export const authLoginSuccess = makeActionCreator(actionTypes.LOGIN_SUCCESS, 'data');
export const authLoginFailed = makeActionCreator(actionTypes.LOGIN_FAILED, 'data');
export const authLogout = makeActionCreator(actionTypes.LOGOUT);
export const authLogoutSuccess = makeActionCreator(actionTypes.LOGOUT_SUCCESS);

export const clearRequestErrors = makeActionCreator(actionTypes.CLEAR_REQUEST_ERRORS);