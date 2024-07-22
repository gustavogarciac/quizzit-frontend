import { z } from 'zod'

export const signUpSchema = z
  .object({
    email: z
      .string()
      .email({ message: 'You must type a valid email address.' }),
    name: z
      .string({ message: 'You must type a name.' })
      .min(2, { message: 'Name must contain at least 3 characters.' })
      .max(42, { message: 'Name must contain at most 42 characters.' }),
    password: z
      .string({ message: 'You must type a password.' })
      .min(8, { message: 'Password must contain at least 8 characters.' })
      .max(42, { message: 'Password must contain at most 42 characters.' })
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            'Password must contain at least one uppercase letter, one lowercase letter, a special character and one number.',
        },
      ),
    confirmPassword: z
      .string({ message: 'You must confirm your password.' })
      .min(8, { message: 'Password must contain at least 8 characters.' })
      .max(42, { message: 'Password must contain at most 42 characters.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
  })

export type SignUpSchemaType = z.infer<typeof signUpSchema>
