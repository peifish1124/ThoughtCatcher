interface ITaskHandler {
  handleTask(event: any): Promise<void>;
}

export default ITaskHandler;