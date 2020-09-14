import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import { conversationState, currentConversationState } from '../recoil/atoms';

dayjs.extend(isToday);

const ConversationItem: React.FC<{id: string}> = ({id}) => {

	const conversation = useRecoilValue(conversationState(id));
	const [currentConversationId, setCurrentConversationId] = useRecoilState(currentConversationState);
	const lastUpdated = dayjs(conversation.last_updated);

	const handleOnConversationClick = () => {
		if (currentConversationId === conversation.id) return null;
		setCurrentConversationId(conversation.id);
	}

	return (
		<li
			className={currentConversationId === conversation.id ? 'active' : ''}
			onClick={handleOnConversationClick}
		>
			<h2>{conversation.name}</h2>
			<p>{conversation.messages[conversation.messages.length - 1].text}</p>
			<span className="time">
				{lastUpdated.isToday() ?
					lastUpdated.format('HH:mm:ss')
				:
					lastUpdated.format('D MMM YYYY')
				}
			</span>
		</li>
	);
}

export default ConversationItem;