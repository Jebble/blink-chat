import React from 'react';
import { useRecoilValue } from 'recoil';
import ConversationItem from './ConversationItem';
import { sortedConversationsState } from '../recoil/selectors';
import SimpleBarReact from 'simplebar-react';

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
			<SimpleBarReact className="conversations-list">
				<ConversationsList />
			</SimpleBarReact>
		</div>
	);
}

export default Sidebar;