import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { AppError } from "../errors";

export const emailClientExists = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const clientEmail: any = req.body.email;
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findEmail: boolean = await clientRepo.exist({
    where: {
      email: clientEmail,
    },
    withDeleted: true,
  });

  if (findEmail && clientEmail) throw new AppError(`Email already exists`, 409);

  next();
};
