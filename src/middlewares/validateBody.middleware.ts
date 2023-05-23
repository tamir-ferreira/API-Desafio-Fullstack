import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, _: Response, next: NextFunction): Response | void => {
    const validated = schema.parse(req.body);
    req.body = validated;
    return next();
  };
