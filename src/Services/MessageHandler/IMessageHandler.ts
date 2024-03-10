interface IMessageHandler {
  sendMessage(event: any, messageText: string): Promise<void>;
}

export default IMessageHandler;