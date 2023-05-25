import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client, Contact } from "../entities";
import { AppError } from "../errors";

export const emailContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactEmail: string = req.body.email;
  const clientId: string = res.locals.clientId;
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const findEmail = await contactRepo.exist({
    relations: {
      client: true,
    },
    where: {
      email: contactEmail,
      client: {
        id: clientId,
      },
    },
  });

  if (findEmail && contactEmail)
    throw new AppError(`Email already exists`, 409);

  next();
};
