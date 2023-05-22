import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { AppError } from "../errors";

export const emailExists = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const userEmail: any = req.body.email;
  const userRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findEmail: boolean = await userRepo.exist({
    where: {
      email: userEmail,
    },
    withDeleted: true,
  });

  if (findEmail && userEmail) throw new AppError(`Email already exists`, 409);

  next();
};
