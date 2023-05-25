import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { clients } from "../../schemas";
import * as i from "../../interfaces/";
import { AppError } from "../../errors";

/* -------------------- LIST CLIENT BY ID SERVICE ----------------------- */
export const readClientById = async (
  clientId: string
): Promise<i.clients.Response> => {
  const clientRepo: i.clients.ClientRepo = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepo.findOneBy({ id: clientId });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const parsedClient: i.clients.ListContacts =
    clients.listContacts.parse(client);

  return parsedClient;
};
