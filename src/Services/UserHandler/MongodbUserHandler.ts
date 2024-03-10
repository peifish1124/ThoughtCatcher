import { getDb, client } from "../../Configs/mongodbConfig.js";

import { User } from "../../Models/User.js";
import IUserHandler from "./IUserHandler.js";

class MongodbUserHandler implements IUserHandler {
  async getUserId(line_id: string): Promise<string> {
    try {
      await client.connect();

      const db = await getDb();
      const collection = db.collection('User');

      const result = await collection.findOne({
        line_id: line_id
      });

      if (result === null) {
        return '';
      } else {
        return result._id.toString();
      }

    } catch (error) {
        throw new Error(`Error finding user: ${error}`);
    } finally {
        await client.close();
    } 
  }

  async addUser(line_id: string): Promise<User>{
    try {
        await client.connect();

        const db = await getDb();
        const collection = db.collection('User');

        const result = await collection.insertOne({
          line_id: line_id
        });

        const newUser: User = {
          id: result.insertedId.toString(),
          line_id: line_id
        }

        return newUser;
    } catch (error) {
        throw new Error(`Error inserting user: ${error}`);
    } finally {
        await client.close();
    }
  }
}

export default MongodbUserHandler;
