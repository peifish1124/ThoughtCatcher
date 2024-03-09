import { Request, Response, Router } from "express";
import line from "@line/bot-sdk";

import linebotConfig from "../Configs/linebotConfig.js";
import TaskController from "../Controllers/TaskController.js";
import LineTaskHandler from "../Services/TaskHandler/LineTaskHandler.js";

const router = Router();

router.post("/connect", line.middleware(linebotConfig), async (req: Request, res: Response) => {
  req.body.events.forEach((event: any) => {
    if (event.type === 'postback') {
      const data = event.postback.data;
      const params = new URLSearchParams(data);
      const action = params.get('action')

      if (action === 'getTasks') {
        const taskController = new TaskController(new LineTaskHandler());
        taskController.getTasks(event, res);
      } else if (action === 'addTask') {
        const taskController = new TaskController(new LineTaskHandler());
        taskController.addTask(event, res);
      }
    } 
    
    else if (event.type === 'message') {
      const taskController = new TaskController(new LineTaskHandler());
      taskController.getWelcome(event, res);
    }
  });
});

export default router;