import { atom, atomFamily, SerializableParam } from 'recoil';
import { ConversationProps } from '../types';

export const conversationsList = atom<{id: string, last_updated: string}[]>({
	key: 'conversationsList',
	default: []
});

export const currentConversationState = atom<string | null>({
	key: 'currentConversationState',
	default: null
});

export const conversationState = atomFamily<ConversationProps, SerializableParam>({
	key: 'conversation',
	default: {} as ConversationProps
});