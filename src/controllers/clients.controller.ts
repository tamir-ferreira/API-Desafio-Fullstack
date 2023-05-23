import { Request, Response } from "express";
import * as i from "../interfaces";
import * as services from "../services";

/* -------------------- CREATE CLIENT CONTROLLER ----------------------- */
export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const createdClient: i.clients.Response = await services.clients.create(
    req.body
  );
  return res.status(201).json(createdClient);
};

/* -------------------- LIST ALL CLIENTS CONTROLLER ----------------------- */
export const listAll = async (_: Request, res: Response): Promise<Response> => {
  const allClients: i.clients.ListAll = await services.clients.listAll();

  return res.status(200).json(allClients);
};

/* -------------------- REMOVE CLIENT CONTROLLER ----------------------- */
export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await services.clients.remove(+req.params.id);

  return res.status(204).json();
};

/* -------------------- GET CLIENT BY ID CONTROLLER ----------------------- */
/* export const getById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client: i.clients.Response = await services.clients.getById(
    +req.params.id
  );

  return res.status(200).json(client);
}; */

/* -------------------- UPDATE CLIENT CONTROLLER ----------------------- */
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updatedClient: i.clients.Response = await services.clients.update(
    +req.params.id,
    // req.user,
    req.body
  );

  return res.status(200).json(updatedClient);
};
