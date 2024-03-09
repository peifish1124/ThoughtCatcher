import express from "express";

import LineRoute from "./Routes/LineRoute.js"

const app = express();

app.get('/', (req, res) => {
  res.send('The server is working!');
});

app.use("/line-webhook", LineRoute);

export default app;