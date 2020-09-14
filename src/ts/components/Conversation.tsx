import React, { useEffect, useRef } from 'react'
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { currentConversationState, conversationState } from '../recoil/atoms';
import { ConversationProps } from '../types';
import MessageInput from './MessageInput';

const Conversation: React.FC = () => {

	const currentConversationId = useRecoilValue<string | null>(currentConversationState);
	const conversation = useRecoilValue<ConversationProps>(conversationState(currentConversationId));
	const scrollableNodeRef = useRef<HTMLDivElement>();

	// Scroll chat to bottom on load and new messages
	useEffect(() => {
		if (scrollableNodeRef.current) {
			scrollableNodeRef.current.scrollTop = scrollableNodeRef.current.scrollHeight;
		}
	}, [conversation]);

	return (<>
		<SimpleBarReact
			className="messages"
			scrollableNodeProps={{
				ref: scrollableNodeRef,
			}}
		>
			{conversation.messages.map( message => {
				return (
					<div key={message.id} className="message">
						<div className="time">
							{dayjs(message.last_updated).format('dddd DD MMM YYYY HH:mm:ss')}
						</div>
						<p>{message.text}</p>
					</div>
				)
			})}
		</SimpleBarReact>

		<MessageInput />
	</>);
}

export default Conversation;