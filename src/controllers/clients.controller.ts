import { Request, Response } from "express";
import * as services from "../services/clients";
import * as i from "../interfaces/clients.interface";

/* -------------------- CREATE CLIENT CONTROLLER ----------------------- */
export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const createdClient: i.Response = await services.createClients(req.body);
  return res.status(201).json(createdClient);
};

/* -------------------- LIST CLIENT BY ID CONTROLLER ----------------------- */
export const listById = async (
  _: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;
  const client: i.Response = await services.readClientById(clientId);

  return res.status(200).json(client);
};

/* -------------------- REMOVE CLIENT CONTROLLER ----------------------- */
export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;
  await services.removeClients(clientId);

  return res.status(204).json();
};

/* -------------------- UPDATE CLIENT CONTROLLER ----------------------- */
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.clientId;
  const updatedClient: i.Response = await services.updateClients(
    clientId,
    req.body
  );

  return res.status(200).json(updatedClient);
};
