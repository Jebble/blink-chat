import React, { useState } from 'react'
import dayjs from 'dayjs';

const Chat = () => {

	const [messageInput, setMessageInput] = useState<string>('');

	const handleMessageSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setMessageInput('');
	}

	return (
		<div className="chat">
			<div className="messages">
				<div className="message">
					<div className="time">{dayjs().format('dddd DD MMM YYYY HH:mm:ss')}</div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam vero vel laboriosam voluptas eveniet possimus expedita facere, ad saepe et, modi iste labore quis recusandae excepturi iusto nobis deserunt.</p>
				</div>
				<div className="message">
					<div className="time">{dayjs().format('dddd DD MMM YYYY HH:mm:ss')}</div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam vero vel laboriosam voluptas eveniet possimus expedita facere, ad saepe et, modi iste labore quis recusandae excepturi iusto nobis deserunt.</p>
				</div>
				<div className="message">
					<div className="time">{dayjs().format('dddd DD MMM YYYY HH:mm:ss')}</div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam vero vel laboriosam voluptas eveniet possimus expedita facere, ad saepe et, modi iste labore quis recusandae excepturi iusto nobis deserunt.</p>
				</div>
			</div>

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
		</div>
	);
}

export default Chat;