import { Router } from "express";
import * as controllers from "../controllers";
// import * as middlewares from "../middlewares";
// import * as schemas from "../schemas";

export const clients = Router();

clients.post(
  "",
  // middlewares.validateBody(schemas.create),
  // middlewares.verifyNameExists,
  controllers.clients.create
);

clients.get("", controllers.clients.listAll);

clients.patch(
  "/:id",
  // middlewares.validateBody(schemas.update),
  // middlewares.verifyIdExists,
  // middlewares.verifyNameExists,
  controllers.clients.update
);

clients.delete(
  "/:id",
  // middlewares.verifyIdExists,
  controllers.clients.remove
);
