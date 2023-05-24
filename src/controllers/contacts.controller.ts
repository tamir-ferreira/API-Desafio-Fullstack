import { Request, Response } from "express";
import { createContacts } from "../services/contacts/createContacts.service";
import { readContacts } from "../services/contacts/readContacts.service";
import { updateContacts } from "../services/contacts/updateContacts.service";
import { removeContacts } from "../services/contacts/removeContacts.service";
import * as i from "../interfaces";

/* -------------------- CREATE CONTACT CONTROLLER ----------------------- */
export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;

  const createdContact = await createContacts(req.body, clientId);
  return res.status(201).json(createdContact);
};

/* -------------------- LIST ALL CONTACTS CONTROLLER ----------------------- */
export const listByClient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;

  const contacts = await readContacts(clientId);

  return res.status(200).json(contacts);
};

/* -------------------- REMOVE MOVIE CONTROLLER ----------------------- */
export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = req.params.id;
  await removeContacts(contactId);

  return res.status(204).json();
};

/* -------------------- UPDATE MOVIE CONTROLLER ----------------------- */
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = req.params.id;

  const updatedValues: i.contacts.Update = req.body;
  const updatedContact = await updateContacts(contactId, updatedValues);

  return res.status(200).json(updatedContact);
};
