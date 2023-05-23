import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client, Contact } from "../entities";
import { AppError } from "../errors";

export const contactExists = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const contactId = +req.params.id;
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const findId: Contact | null = await contactRepo.findOneBy({
    id: contactId,
  });

  if (!findId) throw new AppError(`Contact not found`, 404);

  next();
};
