import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {selectNavigation} from './selectors'
import {
    getNav,
} from './actions'

export const connectNavigation = connect(
    selectNavigation,
    dispatch => bindActionCreators(
        {
            getNav
        },
        dispatch
    )
);