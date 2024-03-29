import { Response } from "express";

import ITaskHandler from "../Services/TaskHandler/ITaskHandler.js";
import IUserHandler from "../Services/UserHandler/IUserHandler.js";
import IMessageHandler from "../Services/MessageHandler/IMessageHandler.js";

import { User } from "../Models/User.js";
import { Task } from "../Models/Task.js";

class TaskController {
  private readonly _taskHandler: ITaskHandler;
  private readonly _userHandler: IUserHandler;
  private readonly _messageHandler: IMessageHandler;

  constructor(taskHandler: ITaskHandler, userHandler: IUserHandler, messageHandler: IMessageHandler) {
    this._taskHandler = taskHandler;
    this._userHandler = userHandler;
    this._messageHandler = messageHandler;
  }

  public async getTasks(event: any, res: Response): Promise<void> {
    try {
      const line_id: string = event.source.userId;
      var user_id: string = await this._userHandler.getUserId(line_id);
      if (user_id == '') {
        const user: User = await this._userHandler.addUser(line_id);
        user_id = user.id;
      } 

      const tasks: Task[] = await this._taskHandler.getTaskList(user_id);

      var message: string;
      if (tasks.length == 0) {
        message = '目前沒有 Task 喔！'
      } else {
        message = tasks.map(task => task.content).join('\n');
      }

      await this._messageHandler.sendMessage(event, message);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  }
  
  public async addTaskInstruction(event: any, res: Response): Promise<void> {
    try {
      await this._messageHandler.addTaskInstruction(event);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  }

  public async addTask(event: any, res: Response): Promise<void> {
    try {
      const line_id: string = event.source.userId;
      var user_id: string = await this._userHandler.getUserId(line_id);
      if (user_id == '') {
        const user: User = await this._userHandler.addUser(line_id);
        user_id = user.id;
      } 

      const taskText = event.message.text;
      const task: Task = await this._taskHandler.addNewTask(user_id, taskText);

      var message: string = `Task：${taskText} 新增成功！`
      await this._messageHandler.sendMessage(event, message);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  }
}

export default TaskController;