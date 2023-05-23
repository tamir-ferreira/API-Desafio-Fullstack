import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { Client } from "../entities";
import * as schemas from "../schemas/clients.schema";

export type Create = z.infer<typeof schemas.create>;

export type Update = DeepPartial<typeof schemas.update>;

export type Response = z.infer<typeof schemas.response>;

export type ListAll = z.infer<typeof schemas.listAll>;

export type ClientRepo = Repository<Client>;
