import * as actionTypes from './actiontypes';
import {makeActionCreator} from 'utils/makeActionCreator'

export const getNav = makeActionCreator(actionTypes.GET_NAV, 'data');
export const getNavSuccess = makeActionCreator(actionTypes.GET_NAV_SUCCESS, 'data');
export const getNavFailed = makeActionCreator(actionTypes.GET_NAV_FAILED, 'errors');
