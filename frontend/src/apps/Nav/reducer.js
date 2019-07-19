import * as actionTypes from './actiontypes';
//import {normalizeData} from './normalize'
const makeRoutes = data => data.map(nav => ({
    path: nav.url,
    ...nav
}))


const navigationInitialState =
    {
        loading: false,
        navs: [],
        routes: []
    };

export default function navigationReducer(state = navigationInitialState, action) {


    switch (action.type) {
        case actionTypes.GET_NAV: {

            return {
                ...state,
                loading: true,
            };
        }
        case actionTypes.GET_NAV_SUCCESS: {
            const navs = action.data;
            const routes = makeRoutes(navs);
            return {
                ...state,
                navs,
                routes,
                loading: false,
            };
        }

        default:
            return state;
    }
}
