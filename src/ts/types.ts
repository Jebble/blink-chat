export type MessageProps = {
	id: string;
	text: string;
	last_updated: string;
}

export type ConversationProps = {
	id: string;
	name: string;
	last_updated: string;
	messages: MessageProps[];
}