import { z } from 'zod'

const createUserValidationSchema = z.object({
  body: z.object({
    username: z
      .string()
      .min(1, { message: 'Username is required' })
      .max(30, { message: 'Username cannot exceed 30 characters' })
      .regex(/^[a-z]+$/, {
        message: 'Username must be all lowercase letters and no spaces',
      }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(18, { message: 'Password cannot exceed 18 characters' })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      }),
    email: z.string().email({ message: 'Invalid email address' }),
    role: z.enum(['admin', 'author', 'reader']).default('reader'),
    profile: z
      .object({
        bio: z.string().optional(),
        avatar: z.string().url().optional(),
      })
      .optional(),
  }),
})

const updateUserValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(18, { message: 'Password cannot exceed 18 characters' })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      })
      .optional(),
    email: z.string().email({ message: 'Invalid email address' }).optional(),
    profile: z
      .object({
        bio: z.string().optional(),
        avatar: z.string().url().optional(),
      })
      .optional(),
    role: z.enum(['admin', 'author', 'reader']).default('reader').optional(),
  }),
})

export const UserValidation = {
  createUserValidationSchema,
  updateUserValidationSchema,
}
