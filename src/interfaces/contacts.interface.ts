import { z } from "zod";
import { Contact } from "../entities";
import { DeepPartial, Repository } from "typeorm";
import * as schemas from "../schemas/contacts.schema";

export type Create = z.infer<typeof schemas.create>;

export type Update = DeepPartial<typeof schemas.update>;

export type Response = z.infer<typeof schemas.response>;

export type ListAll = z.infer<typeof schemas.listAll>;

export type ContactRepo = Repository<Contact>;
