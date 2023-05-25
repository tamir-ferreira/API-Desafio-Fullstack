import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { contacts } from "../../schemas";
import * as i from "../../interfaces";

/* -------------------- UPDATE CONTACT SERVICE ----------------------- */
export const updateContacts = async (
  contactId: string,
  contactData: i.contacts.Update
): Promise<i.contacts.Response> => {
  const ContactRepo: i.contacts.ContactRepo =
    AppDataSource.getRepository(Contact);

  const oldContact: Contact | null = await ContactRepo.findOneBy({
    id: contactId,
  });

  const updatedContact: Contact = ContactRepo.create({
    ...oldContact,
    ...contactData,
  });

  await ContactRepo.save(updatedContact!);

  const parsedUpdated = contacts.response.parse(updatedContact);

  return parsedUpdated;
};
