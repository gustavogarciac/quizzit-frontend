import { z } from 'zod'

const objectiveQuestionFormSchema = z.object({
  title: z
    .string()
    .max(100, { message: 'Title must not exceed 1000 characters. ' })
    .optional(),
  statement: z
    .string({ message: 'Statement is required' })
    .min(5, { message: 'Statement must contain at least 5 characters.' })
    .max(1500, { message: 'Statement must not exceed 1500 characters.' }),
  image: z.string().url().optional(),
  context: z.string({ message: 'Context must be a valid text.' }).optional(),
  subject: z
    .string()
    .min(1, { message: 'You must relate your question to a subject.' }),
})

export type ObjectiveQuestionFormType = z.infer<
  typeof objectiveQuestionFormSchema
>

export { objectiveQuestionFormSchema }
