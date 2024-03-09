import { Request, Response, Router } from "express";

import TaskController from "../Controllers/TaskController.js";
import LineTaskHandler from "../Services/TaskHandler/LineTaskHandler.js";

const router = Router();

router.post("/tasks", async (req: Request, res: Response) => {
  const taskController = new TaskController(new LineTaskHandler());
  taskController.getTests(req, res);
});

export default router;