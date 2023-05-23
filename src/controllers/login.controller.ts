import { Request, Response } from "express";
import * as services from "../services/index";

export const createToken = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await services.login.createToken({ email, password });

  return res.json({ token });
};
