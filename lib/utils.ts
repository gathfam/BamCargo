import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function autoScrollOnFocus(
  e: React.FocusEvent<HTMLElement> | HTMLElement,
  delay: number = 300,
) {
  const target = "target" in e ? (e.target as HTMLElement) : e;

  if (!target) return;

  setTimeout(() => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }, delay);
}
