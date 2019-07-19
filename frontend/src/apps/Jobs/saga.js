import {call, put, takeLatest} from 'redux-saga/effects'
import * as actionTypes from './actiontypes'
import * as actions from './actions'
import Api from './api'

export function* getJobs(action) {
    try {
        const data = yield call(Api.getJobs, action);
        yield put(actions.getJobsSuccess(data))
    } catch (error) {
        console.log('getJobs', error.message);
        yield put(actions.getJobsFailed(error.response.data))
    }
}



export default function* itemSaga() {
    yield takeLatest(actionTypes.GET_JOBS, getJobs)
}

