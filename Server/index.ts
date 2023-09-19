import express, { Express, Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

app.listen(5555, () => {
  console.log("Server running at port 5555");
});
