export function convertFilesToTreeItems(files: any[]) {
  return files.map((file) => ({
    id: file.id || file.name,
    name: file.name,
    children: file.children
      ? convertFilesToTreeItems(file.children)
      : [],
  }));
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
