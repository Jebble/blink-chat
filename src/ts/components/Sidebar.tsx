import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import ConversationItem from './ConversationItem';
import { sortedConversationsState } from '../recoil/selectors';

const Sidebar: React.FC = () => {

	const conversations = useRecoilValue(sortedConversationsState);

	/**
	 * Sort conversations by last_updated
	 * @return ConversationItem[]
	 */
	const ConversationsList: React.FC = () => {
		const items = conversations.map( conversation => {
			return (
				<ConversationItem
					key={conversation.id}
					id={conversation.id}
				/>
			);
		});

		return <>{items}</>;
	}

	return (
		<div className="sidebar">
			<ul>
				<ConversationsList />
			</ul>
		</div>
	);
}

export default Sidebar;