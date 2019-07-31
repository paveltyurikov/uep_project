import {call, put, takeLatest} from 'redux-saga/effects'
import * as actionTypes from './actiontypes'
import * as actions from './actions'
import Api from './api'

export function* getNav(action) {
    try {
        const data = yield call(Api.getNav, action);
        yield put(actions.getNavSuccess(data))
    } catch (error) {
        console.log('getNav', error.message);
        yield put(actions.getNavFailed(error.response.data))
    }
}



export default function* navigationSaga() {
    yield takeLatest(actionTypes.GET_NAV, getNav)
}

