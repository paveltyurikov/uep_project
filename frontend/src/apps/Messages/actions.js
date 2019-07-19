import {makeActionCreator} from 'utils/makeActionCreator'

export const PUSH = 'messages/Push';
export const REMOVE = 'messages/Remove';

export const pushMessage = makeActionCreator(PUSH, 'message');
export const removeMessage = makeActionCreator(REMOVE, 'id');
