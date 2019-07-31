import {defaultReduxKey} from "./config";

export const selectNavigation = (state, props) => ({...state[defaultReduxKey]});