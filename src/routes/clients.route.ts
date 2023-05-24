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

clients.use(middleware.validateToken);

clients.get("", controller.clients.listById);

clients.delete("", controller.clients.remove);

clients.patch(
  "",
  middleware.validateBody(schema.clients.update),
  middleware.emailClientExists,
  controller.clients.update
);
