import React from 'react'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<li>
					<h2>conversation.name</h2>
					<p>Last message</p>
					<span className="time">conversation.last_updated</span>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;