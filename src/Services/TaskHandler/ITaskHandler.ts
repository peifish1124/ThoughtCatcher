import { Task } from "../../Models/Task.js"

interface ITaskHandler {
  getTaskList(user_id: string): Promise<Task[]>;
  // addNewTask(user_id: string, content: string): Promise<Task>;
}

export default ITaskHandler;