import { Router } from "express";
import * as controllers from "../controllers";
// import * as middlewares from "../middlewares";
// import * as schemas from "../schemas";

export const contacts = Router();

contacts.post(
  "",
  // middlewares.validateBody(schemas.create),
  // middlewares.verifyNameExists,
  controllers.contacts.create
);

contacts.get("", controllers.contacts.listAll);

contacts.patch(
  "/:id",
  // middlewares.validateBody(schemas.update),
  // middlewares.verifyIdExists,
  // middlewares.verifyNameExists,
  controllers.contacts.update
);

contacts.delete(
  "/:id",
  // middlewares.verifyIdExists,
  controllers.contacts.remove
);
