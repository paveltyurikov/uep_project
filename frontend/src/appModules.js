import Loadable from "react-loadable";
import Loading from 'components/Loading'
import {isDevEnv} from "./utils";
import Jobs from './apps/Jobs/index'

export const LoadableJobs = isDevEnv() ?
    Jobs
    :
    Loadable({
        loader: () => import(/* webpackChunkName: "app.catalog" */ './apps/Jobs/index'),
        loading: Loading,
    });