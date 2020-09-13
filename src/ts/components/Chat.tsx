import React, { FormEvent, useState } from 'react'

const Chat = () => {

	const [message, setMessage] = useState<string>('');

	const handleMessageSubmit = (e: FormEvent) => {
		e.preventDefault();
		alert(message);
		setMessage('');
	}

	return (
		<div className="chat">
			<div className="messages">
				<div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam vero vel laboriosam voluptas eveniet possimus expedita facere, ad saepe et, modi iste labore quis recusandae excepturi iusto nobis deserunt.</div>
				<div className="message me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae inventore magnam possimus pariatur, fugiat qui distinctio deleniti quod, enim illum corrupti eaque minus cum molestias, nihil provident laborum dignissimos.</div>
				<div className="message me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in doloremque possimus cupiditate sapiente. Eligendi dolores assumenda omnis molestiae, impedit deserunt reiciendis corrupti possimus aliquam, culpa illo quae sunt velit?</div>
				<div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi corrupti beatae a iure, quasi doloribus voluptates omnis quod et, tenetur reprehenderit quas! Distinctio, assumenda omnis commodi officia dicta libero!</div>
			</div>

			<div className="input-wrapper">
				<form onSubmit={handleMessageSubmit}>
					<input
						type="text"
						placeholder="Type a message"
						value={message}
						onChange={ e => setMessage(e.target.value) }
					/>
					<button
						type="submit"
						disabled={!message}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Chat;