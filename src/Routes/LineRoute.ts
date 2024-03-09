import { Request, Response, Router } from "express";
import line from "@line/bot-sdk"

import linebotConfig from "../Configs/linebotConfig.js";
import TaskController from "../Controllers/TaskController.js";
import LineTaskHandler from "../Services/TaskHandler/LineTaskHandler.js";

const router = Router();

router.post("/connect", line.middleware(linebotConfig), async (req: Request, res: Response) => {
  const taskController = new TaskController(new LineTaskHandler());
  taskController.getTasks(req, res);
});

export default router;