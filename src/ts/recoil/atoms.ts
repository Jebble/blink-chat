import memoizeOne from 'memoize-one';
import { atom } from 'recoil';
import { ConversationProps } from '../types';

export const conversationsList = atom<{id: string, last_updated: string}[]>({
	key: 'conversationsList',
	default: []
});

export const conversationWithId = memoizeOne((id: string) => atom({
	key: `Conversation/${id}`,
	default: {} as ConversationProps
}));