import { z } from "zod";

export const response = z.object({
  id: z.string(),
  full_name: z.string().max(45),
  email: z
    .string()
    .max(45)
    .email()
    .transform((email) => email.toLowerCase()),
  telephone: z.string(),
  createdAt: z.string(),
});

export const create = response
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({ password: z.string().max(120) });

export const update = create.partial();

// export const ListById = response;
