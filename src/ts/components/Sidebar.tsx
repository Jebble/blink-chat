import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import ConversationItem from './ConversationItem';
import { conversationsList } from '../recoil/atoms';

const Sidebar: React.FC = () => {

	const conversations = useRecoilValue(conversationsList);

	/**
	 * Sort conversations by last_updated
	 * @return ConversationItem[]
	 */
	const ConversationsList: React.FC = () => {
		const items = [...conversations].sort((a, b) => {
			return new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime();
		}).map( conversation => {
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