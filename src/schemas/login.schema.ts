import { z } from "zod";

export const response = z.object({
  token: z.string(),
});

export const request = z.object({
  email: z.string().email().max(45),
  password: z.string().max(120),
});
