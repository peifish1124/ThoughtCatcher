import express from "express";

import LineRoute from "./Routes/LineRoute.js"
import TaskRoute from "./Routes/TaskRoute.js"

const app = express();

app.get('/', (req, res) => {
  res.send('The server is working!');
});

app.use("/line-webhook", LineRoute);
app.use("/test", TaskRoute);

export default app;