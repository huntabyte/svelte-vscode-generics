// place files you want to import through the `$lib` alias in this folder.

export type SomeType<T extends Record<string, unknown>[], U extends keyof T[number]> = T[number];
