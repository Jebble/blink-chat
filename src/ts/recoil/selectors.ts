import { selector } from 'recoil';
import { ConversationProps } from '../types';
import { conversationIdsState, conversationState } from './atoms';

export const sortedConversationsState = selector<ConversationProps[]>({
	key: 'sortedConversationsList',
	get: ({get}) => {
		const conversationIds = get(conversationIdsState);
		const conversations = conversationIds.map( id =>
			get(conversationState(id))
		);
		return [...conversations].sort((a, b) => {
			return new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime();
		});
	}
});