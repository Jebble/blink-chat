import React from 'react'
import { useRecoilValue } from 'recoil';
import { currentConversationState } from '../recoil/atoms';
import Conversation from './Conversation';

const Chat: React.FC = () => {

	const currentConversationId = useRecoilValue(currentConversationState);

	return (
		<div className="chat">
			{currentConversationId ? (
				<Conversation />
			) : (
				<div className="no-conversation-indicator">
					Select a conversation from the list.
				</div>
			)}
		</div>
	);
}

export default Chat;