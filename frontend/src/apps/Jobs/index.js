import React, { PureComponent } from 'react';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import reducer from "./reducer";
import saga from "./saga";
import Job from './components/Job'
import { defaultReduxKey } from './config'
import { connectJobs } from './connectors'
import PageWrap from 'components/PageWrap'
import Header from 'components/Header'
import Navigation from 'components/Navigation'

class ItemProxy extends PureComponent {
    componentDidMount() {
        this.props.getJobs();
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header isVacancies="true">
                    <Navigation />
                </Header>
                <PageWrap>
                    {
                        this.props.jobs.map(job => <Job key={job.id} {...job} />)
                    }
                </PageWrap>
            </>
        )
    }
};


const withReducer = injectReducer({ key: defaultReduxKey, reducer });
const withSaga = injectSaga({ key: defaultReduxKey, saga });

export default compose(
    withReducer,
    withSaga,
    connectJobs,
)(ItemProxy)