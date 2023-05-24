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
  const clientId = req.params.id;
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findId: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  if (!findId) throw new AppError(`Client not found`, 404);

  next();
};
