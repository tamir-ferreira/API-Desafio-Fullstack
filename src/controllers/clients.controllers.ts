import { Request, Response } from "express";
import * as i from "../interfaces";
import * as services from "../services";

/* -------------------- CREATE USER CONTROLLER ----------------------- */
export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const createdClient: i.clients.Response = await services.clients.create(
    req.body
  );
  return res.status(201).json(createdClient);
};

/* -------------------- LIST ALL clients CONTROLLER ----------------------- */
export const listAll = async (_: Request, res: Response): Promise<Response> => {
  const allClients: i.clients.ListAll = await services.clients.listAll();

  return res.status(200).json(allClients);
};

/* -------------------- REMOVE USER CONTROLLER ----------------------- */
export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await services.clients.remove(+req.params.id);

  return res.status(204).json();
};

/* -------------------- UPDATE USER CONTROLLER ----------------------- */
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
