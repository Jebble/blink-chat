import React, { useState } from 'react';
import { useRecoilValue, useRecoilCallback } from 'recoil';
import { v4 as uuid} from 'uuid';
import { currentConversationState, conversationState } from '../recoil/atoms';
import { ConversationProps } from '../types';

const MessageInput: React.FC = () => {

	const currentConversationId = useRecoilValue<string | null>(currentConversationState);
	const conversation = useRecoilValue<ConversationProps>(conversationState(currentConversationId));
	const [message, setMessage] = useState<string>('');

	const handleMessageSubmit = useRecoilCallback(({set}) => {
		return (e: React.FormEvent) => {
			e.preventDefault();

			const currentDateTime = new Date().toString();
			set(conversationState(currentConversationId), {
				...conversation,
				last_updated: currentDateTime,
				messages: [...conversation.messages, {
					id: uuid(),
					text: message,
					last_updated: currentDateTime
				}]
			});
			setMessage('');
		}
	});

	return (
		<div className="input-wrapper">
			<form onSubmit={handleMessageSubmit}>
				<input
					key="input-wrapper-key"
					type="text"
					placeholder="Type a message"
					value={message}
					onChange={ e => setMessage(e.target.value) }
				/>
				<button
					type="submit"
					disabled={!message}
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default MessageInput;