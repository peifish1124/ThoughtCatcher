import { Request, Response } from "express";

import ITaskHandler from "../Services/TaskHandler/ITaskHandler.js";

class TaskController {
  private readonly _taskHandler: ITaskHandler;

  constructor(taskHandler: ITaskHandler) {
    this._taskHandler = taskHandler;
  }

  public async getTasks(event: any, res: Response): Promise<void> {
    try {
      await this._taskHandler.getAllTasks(event); // may have other logics
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  }

  public async addTask(event: any, res: Response): Promise<void> {
    try {
      await this._taskHandler.addNewTask(event);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  }

  public async getWelcome(event: any, res: Response): Promise<void> {
    try {
      await this._taskHandler.welcomeMessage(event);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  }
}

export default TaskController;