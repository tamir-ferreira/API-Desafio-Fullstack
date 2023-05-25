import { Router } from "express";
import * as controller from "../controllers/contacts.controller";
import * as middleware from "../middlewares";
import * as schema from "../schemas";

export const contacts = Router();

contacts.use(middleware.validateToken);

contacts.get("", controller.listByClient);

contacts.post(
  "",
  middleware.validateBody(schema.contacts.create),
  middleware.emailContactExists,
  controller.create
);

contacts.use(middleware.contactExists, middleware.ensureIsOwnerMiddleware);

contacts.patch(
  "/:id",
  middleware.validateBody(schema.contacts.update),
  middleware.emailContactExists,
  controller.update
);

contacts.delete("/:id", controller.remove);
