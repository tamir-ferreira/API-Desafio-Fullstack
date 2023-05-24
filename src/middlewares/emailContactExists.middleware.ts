import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { AppError } from "../errors";

export const emailContactExists = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const contactEmail: string = req.body.email;
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const findEmail: boolean = await contactRepo.exist({
    where: {
      email: contactEmail,
    },
    withDeleted: true,
  });

  if (findEmail && contactEmail)
    throw new AppError(`Email already exists`, 409);

  next();
};
