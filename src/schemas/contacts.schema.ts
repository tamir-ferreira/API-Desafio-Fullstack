import { z } from "zod";

export const response = z.object({
  id: z.number().int().positive(),
  full_name: z.string().max(45),
  email: z
    .string()
    .max(45)
    .email()
    .transform((email) => email.toLowerCase()),
  telephone: z.string(),
  createdAt: z.string(),
});

export const create = response.omit({
  id: true,
  createdAt: true,
});

export const update = create.partial();

export const listAll = z.array(response.nullable());
