import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { clients } from "../../schemas";
import * as i from "../../interfaces/clients.interface";

/* -------------------- CREATE CLIENT SERVICE ----------------------- */
export const createClients = async (
  clientData: i.Create
): Promise<i.Response> => {
  const clientRepo: i.ClientRepo = AppDataSource.getRepository(Client);
  const newClient: Client = clientRepo.create(clientData);

  await clientRepo.save(newClient);
  const parsedUser: i.Response = clients.response.parse(newClient);

  return parsedUser;
};
