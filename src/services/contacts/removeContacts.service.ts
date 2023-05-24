import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import * as i from "../../interfaces";

/* -------------------- DELETE CONTACT SERVICE ----------------------- */
export const removeContacts = async (contactId: string): Promise<void> => {
  const contactsRepo: i.contacts.ContactRepo =
    AppDataSource.getRepository(Contact);
  const findContact: Contact | null = await contactsRepo.findOneBy({
    id: contactId,
  });

  await contactsRepo.remove(findContact!);
};
