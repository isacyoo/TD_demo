import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const API_GW_URL = "https://6fcoljzgef.execute-api.ap-southeast-2.amazonaws.com/demo"