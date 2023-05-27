import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4, validate as validateUUID } from "uuid";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { AppError } from "../errors";

export const idContactExists = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const contactId = req.params.id;
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  if (!validateUUID(contactId)) {
    throw new AppError("Invalid UUID format", 400);
  }

  const findId: boolean = await contactRepo.exist({
    where: {
      id: contactId,
    },
  });

  if (!findId) throw new AppError(`Contact not found`, 404);

  next();
};
