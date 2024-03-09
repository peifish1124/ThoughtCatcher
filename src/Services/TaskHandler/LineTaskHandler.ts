import ITaskHandler from "./ITaskHandler.js";
import line from '@line/bot-sdk';
import linebotConfig from "../../Configs/linebotConfig.js";

class LineTaskHandler implements ITaskHandler {
  private client: line.messagingApi.MessagingApiClient;

  constructor() {
    this.client = new line.messagingApi.MessagingApiClient(linebotConfig);
  }

  async handleTask(event: any): Promise<void> {
    if (event.type === 'message') {
      const welcomeMessage = [{
        type: 'text',
        text: '歡迎加入 ThoughtCatcher 機器人，有任何想紀錄的事情都歡迎跟我說！',
      }];

      await this.client.replyMessage({
        replyToken: event.replyToken, 
        messages: welcomeMessage
      });
    }
  }

  async handleTest(event: any): Promise<void> {
    const welcomeMessage = [{
      type: 'text',
      text: '左邊按鍵測試成功',
    }];

    await this.client.replyMessage({
      replyToken: event.replyToken, 
      messages: welcomeMessage
    });
  }
}

export default LineTaskHandler;