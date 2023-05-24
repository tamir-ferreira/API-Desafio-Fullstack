import "dotenv/config";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";
import * as i from "../../interfaces/login.interface";

export const createTokenLogin = async ({
  email,
  password,
}: i.Request): Promise<string> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      email,
    },
  });

  if (!client) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(password, client.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }
  const token = jwt.sign({ email: client.email }, process.env.SECRET_KEY!, {
    expiresIn: "1h",
    subject: client.id,
  });

  return token;
};
