import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { Router } from "express";
import * as controller from "../controllers";
import * as middleware from "../middlewares";
import * as schema from "../schemas";

export const contacts = Router();

contacts.use(middleware.validateToken);

contacts.post(
  "",
  middleware.validateBody(schema.contacts.create),
  middleware.emailContactExists,
  controller.contacts.create
);

contacts.get("", controller.contacts.listByClient);

contacts.patch(
  "/:id",
  middleware.contactExists,
  middleware.validateBody(schema.contacts.update),
  middleware.ensureIsOwnerMiddleware,
  middleware.emailContactExists,
  controller.contacts.update
);

contacts.delete(
  "/:id",
  middleware.contactExists,
  middleware.ensureIsOwnerMiddleware,
  controller.contacts.remove
);
