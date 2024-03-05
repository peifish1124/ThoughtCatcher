import express from "express";
​
const app = express();

app.get('/', (req, res) => {
  res.send('The server is working!');
});

export default app;