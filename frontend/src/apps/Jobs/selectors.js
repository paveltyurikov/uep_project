import {defaultReduxKey} from "./config";

export const selectJobs = (state, props) => ({jobs:state[defaultReduxKey].jobs});