import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {getNav} from 'apps/Nav/actions'

export const connectApp = connect(
    state => ({routes:state.navigation.routes}),

    dispatch => bindActionCreators(
        {
            getNav
        },
        dispatch
    )
);