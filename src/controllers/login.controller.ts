import { Request, Response } from "express";
import { createTokenLogin } from "../services/login/login.service";

export const createToken = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await createTokenLogin({ email, password });

  return res.json({ token });
};
