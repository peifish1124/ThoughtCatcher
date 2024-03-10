interface IMessageHandler {
  addTaskInstruction(event: any): Promise<void>;
  sendMessage(event: any, messageText: string): Promise<void>;
}

export default IMessageHandler;