import IMessageHandler from "./IMessageHandler.js";
import line from "@line/bot-sdk";
import linebotConfig from "../../Configs/linebotConfig.js";

class LineMessageHandler implements IMessageHandler {
  private client: line.messagingApi.MessagingApiClient;

  constructor() {
    this.client = new line.messagingApi.MessagingApiClient(linebotConfig);
  }

  async sendMessage(event: any, messageText: string): Promise<void> {
    const Message = [{
      type: 'text',
      text: messageText,
    }];

    await this.client.replyMessage({
      replyToken: event.replyToken, 
      messages: Message
    });
  }

  async addTaskInstruction(event: any): Promise<void> {
    const Message = [{
      type: 'text',
      text: '請輸入想新增的 Task 內容！',
    }];

    await this.client.replyMessage({
      replyToken: event.replyToken, 
      messages: Message
    });
  }
}

export default LineMessageHandler;