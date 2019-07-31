import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import {
    pushMessage,
    removeMessage
} from './actions'

export const connectMessagesActions = connect(
    null,
    dispatch => bindActionCreators(
        {
            pushMessage,
            removeMessage
        }, dispatch
    )
);