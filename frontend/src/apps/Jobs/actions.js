import * as actionTypes from './actiontypes';
import {makeActionCreator} from 'utils/makeActionCreator'

export const getJobs = makeActionCreator(actionTypes.GET_JOBS, 'data');
export const getJobsSuccess = makeActionCreator(actionTypes.GET_JOBS_SUCCESS, 'data');
export const getJobsFailed = makeActionCreator(actionTypes.GET_JOBS_FAILED, 'errors');
