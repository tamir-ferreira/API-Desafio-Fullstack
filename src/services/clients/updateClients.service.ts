import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { clients } from "../../schemas";
import * as i from "../../interfaces/clients.interface";
import { AppError } from "../../errors";

/* -------------------- UPDATE CLIENT SERVICE ----------------------- */
export const updateClients = async (
  IdClient: string,
  clientData: i.Update
): Promise<i.Response> => {
  const clientRepo: i.ClientRepo = AppDataSource.getRepository(Client);
  const findClient: Client | null = await clientRepo.findOneBy({
    id: IdClient,
  });

  if (!findClient) {
    throw new AppError("Client not found", 404);
  }

  const updatedClient: Client = clientRepo.create({
    ...findClient,
    ...clientData,
  });

  await clientRepo.save(updatedClient);

  const parsedUpdated: i.Response = clients.response.parse(updatedClient);

  return parsedUpdated;
};
