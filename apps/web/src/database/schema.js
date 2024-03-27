import { z } from "zod";

/**
 * @typedef {z.infer<typeof Todo>} Todo
 */
const Todo = z.object({
  id: z.string(),
  /* this is the title of the todo */
  title: z.string(),
  // this is a comment
  completed: z.boolean(),
});
