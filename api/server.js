import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();

const PORT = 8000;

//mideelewaters
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

import useroRouter from "./useroRouter.js";
import { connectDB } from "./dbConfig.js";
app.use("/user", useroRouter);

connectDB();

app.use("/", (req, res) => {
  res.json({
    status: "error",
    message: "Error",
  });
});

// run node app in the server

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is spinning at http://localhost:${PORT}`);
});
