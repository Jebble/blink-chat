import React from 'react';
import  './app.scss';
import Sidebar from './ts/components/Sidebar';
import Chat from './ts/components/Chat';

function App() {

	return (
		<div className="app">
			<Sidebar />
			<Chat />
		</div>
	);
}

export default App;
