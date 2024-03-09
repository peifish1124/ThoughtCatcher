interface ITaskHandler {
  getAllTasks(event: any): Promise<void>;
  addNewTask(event: any): Promise<void>;
  welcomeMessage(event: any): Promise<void>;
}

export default ITaskHandler;