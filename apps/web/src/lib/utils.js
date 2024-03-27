import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param {...any} inputs
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
