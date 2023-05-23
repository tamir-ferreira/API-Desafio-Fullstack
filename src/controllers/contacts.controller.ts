import { Request, Response } from "express";
import * as i from "../interfaces";
import * as services from "../services";

/* -------------------- CREATE CONTACT CONTROLLER ----------------------- */
export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.userId;

  const createdContact = await services.contacts.create(req.body, userId);
  return res.status(201).json(createdContact);
};

/* -------------------- LIST ALL CONTACTS CONTROLLER ----------------------- */
export const listAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.userId;
  /*  const page = req.query.page;
  const perPage = req.query.perPage;
  const sort = req.query.sort;
  const order = req.query.order;
  const allMovies: interfaces.tListData = await services.listAll(
    page,
    perPage,
    sort,
    order
  ); */

  const contacts = await services.contacts.listAll(userId);

  return res.status(200).json(contacts);
};

/* -------------------- REMOVE MOVIE CONTROLLER ----------------------- */
export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = req.params.id;
  await services.contacts.remove(+contactId);

  return res.status(204).json();
};

/* -------------------- UPDATE MOVIE CONTROLLER ----------------------- */
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = req.params.id;
  const updatedValues: i.contacts.Update = req.body;
  const updatedContact = await services.contacts.update(
    updatedValues,
    +contactId
  );

  return res.status(200).json(updatedContact);
};
