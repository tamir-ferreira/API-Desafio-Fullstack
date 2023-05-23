import { z } from "zod";
import * as schemas from "../schemas/login.schema";

export type Request = z.infer<typeof schemas.request>;

export type Response = z.infer<typeof schemas.response>;
