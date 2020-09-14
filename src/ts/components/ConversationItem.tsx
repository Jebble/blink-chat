import React from 'react';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import { conversationState } from '../recoil/atoms';

dayjs.extend(isToday);

const ConversationItem: React.FC<{id: string}> = ({id}) => {

	const conversation = useRecoilValue(conversationState(id));
	const lastUpdated = dayjs(conversation.last_updated);

	return (
		<li>
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