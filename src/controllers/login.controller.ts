import { Request, Response } from "express";
import * as services from "../services/login";

export const createToken = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await services.createTokenLogin({ email, password });

  return res.json({ token });
};
