import { z } from 'zod';

export const cardSchema = z.object({
  title: z.string().min(5, 'Title should contain minimum of five characters'),
  description: z.string().min(10, 'Description is too short'),
});
