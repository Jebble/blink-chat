import React, { useEffect, useRef } from 'react'
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import { useRecoilValue } from 'recoil';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { currentConversationState, conversationState } from '../recoil/atoms';
import { ConversationProps } from '../types';
import MessageInput from './MessageInput';

dayjs.extend(isToday);

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

	const getTimestamp: (timestamp: string) => string = (timestamp) => {
		const lastUpdated = dayjs(timestamp);
		if (lastUpdated.isToday()) {
			return lastUpdated.format('HH:mm:ss');
		}

		return lastUpdated.format('dddd DD-MM-YYYY HH:mm:ss');

	}

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
							{getTimestamp(message.last_updated)}
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