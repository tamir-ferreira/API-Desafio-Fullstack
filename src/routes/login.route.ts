import { Router } from "express";
import * as controller from "../controllers/";
import * as middleware from "../middlewares";
import * as schema from "../schemas";

export const login = Router();

login.post(
  "",
  middleware.validateBody(schema.login.request),
  controller.login.createToken
);
