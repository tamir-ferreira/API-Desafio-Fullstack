import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors";
import * as i from "../../interfaces/clients.interface";

/* -------------------- DELETE CLIENT SERVICE ----------------------- */
export const removeClients = async (IdClient: string): Promise<void> => {
  const clientRepo: i.ClientRepo = AppDataSource.getRepository(Client);

  const findClient: Client | null = await clientRepo.findOneBy({
    id: IdClient,
  });

  if (!findClient) {
    throw new AppError("Client not found", 404);
  }

  await clientRepo.delete(IdClient);
};
