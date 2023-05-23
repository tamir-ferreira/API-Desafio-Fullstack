import { Router } from "express";
import * as controller from "../controllers";
import * as middleware from "../middlewares";
import * as schema from "../schemas";

export const contacts = Router();

contacts.post(
  "",
  middleware.validateBody(schema.contacts.create),
  middleware.emailContactExists,
  controller.contacts.create
);

contacts.get("", controller.contacts.listAll);

contacts.patch(
  "/:id",
  middleware.validateBody(schema.contacts.update),
  middleware.contactExists,
  controller.contacts.update
);

contacts.delete("/:id", middleware.contactExists, controller.contacts.remove);
