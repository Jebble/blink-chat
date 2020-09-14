import { atom, atomFamily } from 'recoil';
import { ConversationProps } from '../types';

export const conversationsList = atom<{id: string, last_updated: string}[]>({
	key: 'conversationsList',
	default: []
});

export const conversationState = atomFamily({
	key: 'conversation',
	default: {} as ConversationProps
});