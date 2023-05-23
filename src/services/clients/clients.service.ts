import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { clients } from "../../schemas";
import * as i from "../../interfaces/clients.interface";

/* -------------------- CREATE CLIENT SERVICE ----------------------- */
export const create = async (clientData: i.Create): Promise<i.Response> => {
  const clientRepo: i.ClientRepo = AppDataSource.getRepository(Client);
  const newClient: Client = clientRepo.create(clientData);

  await clientRepo.save(newClient);
  const parsedUser: i.Response = clients.response.parse(newClient);

  return parsedUser;
};

/* -------------------- LIST ALL CLIENTS SERVICE ----------------------- */
export const listAll = async (): Promise<i.ListAll> => {
  const clientRepo: i.ClientRepo = AppDataSource.getRepository(Client);

  const allClients: Array<Client> = await clientRepo.find();
  const parsedAllClients: i.ListAll = clients.listAll.parse(allClients);

  return parsedAllClients;
};

/* -------------------- DELETE CLIENT SERVICE ----------------------- */
export const remove = async (IdClient: number): Promise<void> => {
  const clientRepo: i.ClientRepo = AppDataSource.getRepository(Client);
  /* const findClient: Client | null = await clientRepo.findOneBy({
    id: IdClient,
  }); */

  await clientRepo.delete(IdClient);
};

/* -------------------- UPDATE USER SERVICE ----------------------- */
export const update = async (
  IdClient: number,
  // reqClient: { id: number; isAdmin: boolean },
  clientData: i.Update
): Promise<i.Response> => {
  const clientRepo: i.ClientRepo = AppDataSource.getRepository(Client);
  const findClient: Client | null = await clientRepo.findOneBy({
    id: IdClient,
  });

  // if (reqUser.id !== idUser && !reqUser.isAdmin)
  //   throw new AppError(`Insufficient permission`, 403);

  const updatedClient: Client = clientRepo.create({
    ...findClient,
    ...clientData,
  });

  await clientRepo.save(updatedClient);

  const parsedUpdated: i.Response = clients.response.parse(updatedClient);

  return parsedUpdated;
};
