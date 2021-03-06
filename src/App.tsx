import  './app.scss';
import React from 'react';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import data from './data.json';
import { conversationIdsState, conversationState } from './ts/recoil/atoms';
import Sidebar from './ts/components/Sidebar';
import Chat from './ts/components/Chat';

const App = () => {

	/**
	 * Initialize Recoil state from data.json
	 * @param set Recoil setter to set Atoms/Selectors
	 */
	const initializeState = ({set}: MutableSnapshot) => {

		// Set the conversationList Atom
		set(conversationIdsState, () => data.map(conversation => conversation.id));

		// Set Recoil Atom for every conversation.
		data.forEach(conversation => {
			set(conversationState(conversation.id), () => {
				const sortedMessages = [...conversation.messages].sort((a,b) => {
					return new Date(a.last_updated).getTime() - new Date(b.last_updated).getTime();
				});

				return {
					...conversation,
					messages: sortedMessages
				}
			});
		});
	};

	return (
		<div className="app">
			<RecoilRoot initializeState={initializeState}>
				<Sidebar />
				<Chat />
			</RecoilRoot>
		</div>
	);
}

export default App;
