import { getDb, client } from "../../Configs/mongodbConfig.js";

import { Task } from "../../Models/Task.js";
import ITaskHandler from "./ITaskHandler.js";

class MongodbTaskHandler implements ITaskHandler {
  async getTaskList(user_id: string): Promise<Task[]>{
    const filteredTasks: Task[] = [];
    try {
        await client.connect();

        const db = await getDb();
        const collection = db.collection('Task');

        const results = await collection.find({
            user_id: user_id
        }).toArray();

        results.forEach((row: any) => {
            const task: Task = {
                id: row._id.toString(),
                content: row.content,
                user_id: row.user_id
            };
            filteredTasks.push(task);
        });

        return filteredTasks;
    } catch (error) {
        throw new Error(`Error fetching tasks: ${error}`);
    } finally {
        await client.close();
    }
  }

  async addNewTask(user_id: string, content: string): Promise<Task> {
    try {
        await client.connect();

        const db = await getDb();
        const collection = db.collection('Task');

        const result = await collection.insertOne({
            user_id: user_id,
            content: content
        });

        const newTask: Task = {
            id: result.insertedId.toString(),
            user_id: user_id,
            content: content
          }
  
        return newTask;
    } catch (error) {
        throw new Error(`Error inserting tasks: ${error}`);
    } finally {
        await client.close();
    }    
  }
}

export default MongodbTaskHandler;
