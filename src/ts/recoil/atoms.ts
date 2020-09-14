import { atom, atomFamily, SerializableParam } from 'recoil';
import { ConversationProps } from '../types';

export const conversationIdsState = atom<string[]>({
	key: 'conversationsList',
	default: []
});

export const conversationState = atomFamily<ConversationProps, SerializableParam>({
	key: 'conversation',
	default: {} as ConversationProps
});

export const currentConversationState = atom<string | null>({
	key: 'currentConversationState',
	default: null
});