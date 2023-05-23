import express, { Application, json } from "express";
import "express-async-errors";
import "reflect-metadata";
import { errorHandler } from "./errors";
import * as routes from "./routes";

const app: Application = express();
app.use(json());

app.use("/clients", routes.clients);
app.use("/login", routes.login);
app.use("/contacts", routes.contacts);

app.use(errorHandler);

export default app;
