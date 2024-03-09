interface ITaskHandler {
  handleTask(event: any): Promise<void>;
  handleTest(event: any): Promise<void>;
}

export default ITaskHandler;