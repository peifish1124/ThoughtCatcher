import ITaskHandler from "./ITaskHandler.js";
import line from "@line/bot-sdk";
import linebotConfig from "../../Configs/linebotConfig.js";

class LineTaskHandler implements ITaskHandler {
  private client: line.messagingApi.MessagingApiClient;

  constructor() {
    this.client = new line.messagingApi.MessagingApiClient(linebotConfig);
  }

  async getAllTasks(event: any): Promise<void> {
    const leftMessage = [{
      type: 'text',
      text: '左邊按鍵成功',
    }];

    await this.client.replyMessage({
      replyToken: event.replyToken, 
      messages: leftMessage
    });
  }

  async addNewTask(event: any): Promise<void> {
    const rightMessage = [{
      type: 'text',
      text: '右邊按鍵成功',
    }];

    await this.client.replyMessage({
      replyToken: event.replyToken, 
      messages: rightMessage
    });
  }

  async welcomeMessage(event: any): Promise<void> {
    const welcomeMessage = [{
      type: 'text',
      text: '歡迎使用 Thought Catcher, 有想紀錄的都可以跟我說！',
    }];

    await this.client.replyMessage({
      replyToken: event.replyToken, 
      messages: welcomeMessage
    });
  }
}

export default LineTaskHandler;