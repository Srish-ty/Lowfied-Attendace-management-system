// create a simple express server
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { testData } from "./models/testData";

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send(testData);
});
app.listen(port, () => {
  console.log(
    `Server is running on port ${port}. go to https://localhost:${port}`
  );
});
