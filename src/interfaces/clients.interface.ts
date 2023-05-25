import { z } from "zod";
import { Client } from "../entities";
import { DeepPartial, Repository } from "typeorm";
import * as schemas from "../schemas/clients.schema";

export type Create = z.infer<typeof schemas.create>;

export type Update = DeepPartial<typeof schemas.update>;

export type Response = z.infer<typeof schemas.response>;

export type ListContacts = z.infer<typeof schemas.listContacts>;

export type ClientRepo = Repository<Client>;
