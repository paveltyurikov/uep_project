import {call, put, takeLatest} from 'redux-saga/effects'
import Api from './api'
import * as authActionTypes from './actiontypes'
import * as actions from './actions'


export function* authLogin(action) {
    try {
        const data = yield call(Api.authLogin, action);
        yield put(actions.authLoginSuccess(data))
    } catch (error) {
        console.log(error.message);
       if (error.response.format === 'json') yield put(actions.authLoginFailed(error.response.data))
    }
}
export function* authLogout(action) {
    try {
        const data = yield call(Api.authLogout, action);
        yield put(actions.authLogoutSuccess(data))
    } catch (error) {
        console.log(error.message);
        yield put(actions.apiLoading(false))
    }
}

export default function* authSaga() {
    yield takeLatest(authActionTypes.LOGIN, authLogin);
    yield takeLatest(authActionTypes.LOGOUT, authLogout);
}

