import React, { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs';
import { useRecoilState, useRecoilValue } from 'recoil';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { currentConversationState, conversationState } from '../recoil/atoms';
import { ConversationProps } from '../types';

const Chat = () => {

	const [messageInput, setMessageInput] = useState<string>('');
	const currentConversationId = useRecoilValue<string | null>(currentConversationState);
	const [conversation, setConversation] = useRecoilState<ConversationProps>(conversationState(currentConversationId));
	const [autoScroll, setAutoScroll] = useState<boolean>(true);
	const scrollableNodeRef = useRef<HTMLDivElement>();

	// Set eventlistener for chat scroll
	// useEffect(() => {
	// 	if (scrollableNodeRef.current) {
	// 		scrollableNodeRef.current.addEventListener('scroll', handleChatScroll);
	// 		return () => {
	// 			scrollableNodeRef.current.removeEventListener('scroll', handleChatScroll);
	// 		};
	// 	}
	// }, [scrollableNodeRef]);

	useEffect(() => {
		if (autoScroll && scrollableNodeRef.current) {
			scrollChatToBottom();
		}
	}, [autoScroll, conversation]);

	// const handleChatScroll = (e: Event): void => {
	// 	const scrollArea = e.target as HTMLDivElement;
	// 	if (scrollArea.scrollTop !== scrollArea.scrollHeight - scrollArea.offsetHeight) {
	// 	setAutoScroll(false);
	// 	} else {
	// 		setAutoScroll(true);
	// 	}
	// };

	const scrollChatToBottom = (): void => {
		console.log(scrollableNodeRef.current.scrollHeight);
		setTimeout(() => {
			scrollableNodeRef.current.scrollTop = scrollableNodeRef.current.scrollHeight;
		}, 1);
		setAutoScroll(true);
	};

	const handleMessageSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setMessageInput('');
	}

	const NoConversationIndicator = () => {
		return (
			<div className="no-conversation-indicator">
				Select a conversation from the list.
			</div>
		)
	}

	const Conversation = () => {
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

			<div className="input-wrapper">
				<form onSubmit={handleMessageSubmit}>
					<input
						type="text"
						placeholder="Type a message"
						value={messageInput}
						onChange={ e => setMessageInput(e.target.value) }
					/>
					<button
						type="submit"
						disabled={!messageInput}
					>
						Submit
					</button>
				</form>
			</div>
		</>);
	}

	if (Object.keys(conversation).length === 0) {
		return (
			<div className="chat">
				<NoConversationIndicator />
			</div>
		);
	}

	return (
		<div className="chat">
			<Conversation />
		</div>
	);
}

export default Chat;