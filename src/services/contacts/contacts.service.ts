import { AppDataSource } from "../../data-source";
import { Contact, Client } from "../../entities";
import { AppError } from "../../errors";
import { contacts } from "../../schemas";
import * as i from "../../interfaces";

/* -------------------- CREATE CONTACT SERVICE ----------------------- */
export const create = async (
  contactData: i.contacts.Create,
  clientId: number
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

/* -------------------- LIST ALL CONTACTS SERVICE ----------------------- */
export const listAll = async (userId: number): Promise<i.contacts.ListAll> => {
  const contactRepo: i.contacts.ContactRepo =
    AppDataSource.getRepository(Contact);

  const allContacts: Array<Contact> = await contactRepo.find();

  const parsedAllContacts: i.contacts.ListAll =
    contacts.listAll.parse(allContacts);

  return parsedAllContacts;
};

/* -------------------- DELETE CONTACT SERVICE ----------------------- */
export const remove = async (IdContact: number): Promise<void> => {
  const ContactRepo: i.contacts.ContactRepo =
    AppDataSource.getRepository(Contact);
  const findContact: Contact | null = await ContactRepo.findOneBy({
    id: IdContact,
  });

  await ContactRepo.remove(findContact!);
};

/* -------------------- UPDATE CONTACT SERVICE ----------------------- */
export const update = async (
  contactData: i.contacts.Update,
  contactId: number
  // reqUser: { id: number; isAdmin: boolean },
): Promise<i.contacts.Response> => {
  const ContactRepo: i.contacts.ContactRepo =
    AppDataSource.getRepository(Contact);
  const findContact: Contact | null = await ContactRepo.findOneBy({
    id: contactId,
  });

  // if (reqUser.id !== idUser && !reqUser.isAdmin)
  //   throw new AppError(`Insufficient permission`, 403);

  const updatedContact: Contact = ContactRepo.create({
    ...findContact,
    ...contactData,
  });

  await ContactRepo.save(updatedContact);

  const parsedUpdated: i.contacts.Response =
    contacts.response.parse(updatedContact);

  return parsedUpdated;
};
