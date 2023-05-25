import { AppDataSource } from "../../data-source";
import { Contact, Client } from "../../entities";
import { contacts } from "../../schemas";
import { AppError } from "../../errors";
import * as i from "../../interfaces";

/* -------------------- CREATE CONTACT SERVICE ----------------------- */
export const createContacts = async (
  contactData: i.contacts.Create,
  clientId: string
): Promise<i.contacts.Response> => {
  const contactRepo: i.contacts.ContactRepo =
    AppDataSource.getRepository(Contact);
  const clientRepo: i.clients.ClientRepo = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("User not found", 404);
  }

  const newContact: Contact = contactRepo.create({ ...contactData, client });

  await contactRepo.save(newContact);

  const parsedContact: i.contacts.Response =
    contacts.response.parse(newContact);

  return parsedContact;
};
