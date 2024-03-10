import { User } from "../../Models/User.js";

interface IUserHandler {
  getUserId(line_id: string): Promise<string>;
  addUser(line_id: string): Promise<User>;
}

export default IUserHandler;