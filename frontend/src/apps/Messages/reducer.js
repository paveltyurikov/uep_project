import {
    PUSH,
    REMOVE
} from './actions';
import {genID} from 'utils/genID'

const messagesInitialState =
    {
        messages: [],
    };

export default function messagesReducer(state = messagesInitialState, action) {
    switch (action.type) {
        case PUSH: {
            const message = {id: genID(), ...action.message};
            const messages = [...state.messages, message];
            return {
                ...state,
                messages
            };
        }
        case REMOVE: {
            const {id} = action;
            const messages = state.messages.filter(message => message.id !== id);
            console.log(state.messages.length, messages.length)
            return {
                ...state,
                messages
            };
        }
        default:
            return state;
    }
}
