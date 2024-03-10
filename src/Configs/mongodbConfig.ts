import dotenv from "dotenv";
dotenv.config();
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGO_URL || '';
const dbName = process.env.MONGO_DB_NAME || '';

const client = new MongoClient(uri);

export async function getDb(): Promise<Db> {
    await client.connect();
    return client.db(dbName);
}

export { client };