import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { AppError } from "../errors";

export const clientExists = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const userId = +req.params.id;
  const userRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findId: Client | null = await userRepo.findOneBy({
    id: userId,
  });

  if (!findId) throw new AppError(`User not found`, 404);

  next();
};
