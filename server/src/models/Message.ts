export interface Message {
   userId: string;
   messageId: string;
   text: string;
}

export const createMessage = (model: Partial<Message>): Message => ({
   userId: '',
   messageId: '',
   text: '',
   ...model,
});
