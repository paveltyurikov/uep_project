import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {selectJobs} from './selectors'
import {
    getJobs,
} from './actions'

export const connectJobs = connect(
    selectJobs,
    dispatch => bindActionCreators(
        {
            getJobs
        },
        dispatch
    )
);