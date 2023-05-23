import { Router } from "express";
import * as controller from "../controllers";
import * as middleware from "../middlewares";
import * as schema from "../schemas";

export const clients = Router();

clients.post(
  "",
  middleware.validateBody(schema.clients.create),
  middleware.emailClientExists,
  controller.clients.create
);

clients.get("", controller.clients.listAll);

clients.patch(
  "/:id",
  middleware.validateBody(schema.clients.update),
  middleware.clientExists,
  middleware.emailClientExists,
  controller.clients.update
);

clients.delete("/:id", middleware.clientExists, controller.clients.remove);
