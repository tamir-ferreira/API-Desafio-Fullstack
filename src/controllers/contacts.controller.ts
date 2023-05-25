import { Request, Response } from "express";
import * as services from "../services/contacts";
import * as i from "../interfaces/contacts.interface";

/* -------------------- CREATE CONTACT CONTROLLER ----------------------- */
export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;

  const createdContact = await services.createContacts(req.body, clientId);
  return res.status(201).json(createdContact);
};

/* -------------------- LIST ALL CONTACTS CONTROLLER ----------------------- */
export const listByClient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;

  const contacts = await services.readContacts(clientId);

  return res.status(200).json(contacts);
};

/* -------------------- REMOVE MOVIE CONTROLLER ----------------------- */
export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = req.params.id;
  await services.removeContacts(contactId);

  return res.status(204).json();
};

/* -------------------- UPDATE MOVIE CONTROLLER ----------------------- */
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = req.params.id;

  const updatedValues: i.Update = req.body;
  const updatedContact = await services.updateContacts(
    contactId,
    updatedValues
  );

  return res.status(200).json(updatedContact);
};
