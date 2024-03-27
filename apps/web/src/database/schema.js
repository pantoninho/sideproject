import { z } from "zod";
import { serial, text, pgTableCreator, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const pgTable = pgTableCreator((name) => `sideproject_${name}`);

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("name").notNull(),
  completed: boolean("completed").notNull().default(false),
});

/**
 * @typedef {z.infer<typeof NewTodo>} NewTodo
 */
export const NewTodo = createInsertSchema(todos);
/**
 * @typedef {z.infer<typeof Todo>} Todo
 */
export const Todo = createSelectSchema(todos);
