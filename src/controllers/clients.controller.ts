import { Request, Response } from "express";
import { createClients } from "../services/clients/createClients.service";
import { readClientById } from "../services/clients/readClients.service";
import { updateClients } from "../services/clients/updateClients.service";
import { removeClients } from "../services/clients/removeClients.service";
import * as i from "../interfaces";

/* -------------------- CREATE CLIENT CONTROLLER ----------------------- */
export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const createdClient: i.clients.Response = await createClients(req.body);
  return res.status(201).json(createdClient);
};

/* -------------------- LIST CLIENT BY ID CONTROLLER ----------------------- */
export const listById = async (
  _: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;
  const client: i.clients.Response = await readClientById(clientId);

  return res.status(200).json(client);
};

/* -------------------- REMOVE CLIENT CONTROLLER ----------------------- */
export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;
  await removeClients(clientId);

  return res.status(204).json();
};

/* -------------------- UPDATE CLIENT CONTROLLER ----------------------- */
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;
  const updatedClient: i.clients.Response = await updateClients(
    clientId,
    req.body
  );

  return res.status(200).json(updatedClient);
};
