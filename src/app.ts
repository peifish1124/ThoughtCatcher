import express from "express";
import dotenv from "dotenv";

import LineRoute from "./Routes/LineRoute.js"
​
dotenv.config();

const app = express();

console.log('testing');
console.log(process.env.CHANNEL_ACCESS_TOKEN);
console.log(process.env.CHANNEL_SECRET);

app.get('/', (req, res) => {
  res.send('The server is working!');
});

app.use("/line-webhook", LineRoute);

export default app;