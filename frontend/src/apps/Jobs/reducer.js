import * as actionTypes from './actiontypes';

const navigationInitialState =
    {
        loading: false,
        jobs: [],
    };

export default function navigationReducer(state = navigationInitialState, action) {


    switch (action.type) {
        case actionTypes.GET_JOBS: {

            return {
                ...state,
                loading: true,
            };
        }
        case actionTypes.GET_JOBS_SUCCESS: {
            return {
                ...state,
                jobs: action.data,
                loading: false,
            };
        }

        default:
            return state;
    }
}
