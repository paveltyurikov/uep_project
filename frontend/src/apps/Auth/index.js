import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from "redux";
import * as actions from './actions'
import LoginForm from './Form'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import reducer from './reducer';
import saga from './saga';


export const withAuthentication = (Component) => {
    const ModifiedComponent = (
        {
            isAuthenticated,
            loading,
            authLogin,
            authLogout,
            requestErrors,
            clearRequestErrors,
            error,
            match,
            ...restProps
        }) => {
        return isAuthenticated ?
            <Component
                match={match}
                authLogout={authLogout}
                {...restProps}
            />
            :
            <LoginForm
                loading={loading}
                authLogin={authLogin}
                requestErrors={requestErrors}
                clearRequestErrors={clearRequestErrors}
            />
    };

    const mapStateToProps = state => (state.session);
    const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

    const withReducer = injectReducer({key: 'session', reducer});
    const withSaga = injectSaga({key: 'session', saga});

    const withConnect = connect(
        mapStateToProps,
        mapDispatchToProps,
    );

    return compose(
        withReducer,
        withSaga,
        withConnect)(ModifiedComponent)
};

