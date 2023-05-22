import { Router } from "express";
import * as controllers from "../controllers";
import * as middlewares from "../middlewares";
import * as schemas from "../schemas";

export const clients = Router();

clients.post(
  "",
  middlewares.validateBody(schemas.clients.create),
  middlewares.emailExists,
  controllers.clients.create
);

clients.get("", controllers.clients.listAll);

clients.patch(
  "/:id",
  middlewares.validateBody(schemas.clients.update),
  middlewares.clientExists,
  middlewares.emailExists,
  controllers.clients.update
);

clients.delete("/:id", middlewares.clientExists, controllers.clients.remove);
