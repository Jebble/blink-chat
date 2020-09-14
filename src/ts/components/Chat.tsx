import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
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