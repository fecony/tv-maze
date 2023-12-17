import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// TODO: fix types so that keys are strict to being keys of Item?
export const pick = <
    Item extends Record<string, unknown>,
    Keys extends readonly string[],
    Result,
>(
    obj: Item,
    keys: Keys,
) =>
    keys.reduce(
        (acc, key) => ({
            ...acc,
            ...(key in obj && { [key]: obj[key] }),
        }),
        {} as Result,
    );
