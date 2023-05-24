import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { AppError } from "../errors";

export const emailClientExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const bodyEmail: string = req.body.email;
  const tokenEmail: string = res.locals.email;
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findClient: boolean = await clientRepo.exist({
    where: {
      email: bodyEmail,
    },
    withDeleted: true,
  });

  if (findClient && bodyEmail !== tokenEmail)
    throw new AppError(`Email already exists`, 409);

  next();
};
