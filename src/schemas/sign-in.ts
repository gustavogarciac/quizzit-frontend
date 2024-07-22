import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email({ message: 'You must type a valid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must contain at least 8 characters.' })
    .max(42, { message: 'Password must contain at most 42 characters.' }),
})

export type signInSchemaType = z.infer<typeof signInSchema>
