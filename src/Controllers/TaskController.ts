import { Request, Response } from "express";

import ITaskHandler from "../Services/TaskHandler/ITaskHandler.js";

class TaskController {
  private readonly _taskHandler: ITaskHandler;

  constructor(taskHandler: ITaskHandler) {
    this._taskHandler = taskHandler;
  }

  public async getTasks(req: Request, res: Response): Promise<void> {
    try {
      for (const event of req.body.events) {
        await this._taskHandler.handleTask(event);
      }
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  }
}

export default TaskController;