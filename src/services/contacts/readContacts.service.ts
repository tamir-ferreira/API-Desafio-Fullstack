import { contacts } from "./../../routes/contacts.route";
import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import { listAll } from "../../schemas/contacts.schema";
import * as i from "../../interfaces";
import { AppError } from "../../errors";
import { Equal, Repository } from "typeorm";

/* -------------------- LIST ALL CONTACTS SERVICE ----------------------- */
export const readContacts = async (
  clientId: string
): Promise<i.contacts.ListAll | void> => {
  const clientsRepo: Repository<Client> = AppDataSource.getRepository(Client);
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const client: Client | null = await clientsRepo.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("User not found", 404);
  }

  const contacts: Contact[] = await contactsRepo.findBy({
    client: client,
  });

  return listAll.parse(contacts);
};
