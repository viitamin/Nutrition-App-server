import express from "express";
import logger from "morgan";
import userRouter from "../src/router/userRouter";

const app = new express();

app.use(logger("dev"));
app.use(express.json());

app.use("/users", userRouter);

export default app;
