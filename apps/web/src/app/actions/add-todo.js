import { db } from "@/database";
import { todos } from "@/database/schema";
import { revalidatePath } from "next/cache";

/**
 *
 * @param {FormData} formData
 */
export async function addTodo(formData) {
  "use server";

  console.log("adding todo...");
  await db.insert(todos).values({
    title: formData.get("title"),
  });
  console.log("added todo..");

  revalidatePath("/");
}
