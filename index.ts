export class PlainObject { [key: string]: any; }
export type ClassReference<T> = new () => T;
export type TypesInType<T> = { [P in keyof T]: T[P]; }[keyof T];
export type FlattenArrayTypes<T> = T extends (infer U)[] ? FlattenArrayTypes<U> : T;
export type Except<T, K> = T extends K ? never : T;
export type Extract<T, K> = T extends K ? T : never;
export type ExcludeKeyFromType<T, K> = { [P in Except<keyof T, K>]: T[P]; };
export type ExtractKeyFromType<T, K> = { [P in Extract<keyof T, K>]: T[P]; };
export type Predicate<T> = (item: T) => boolean;
export type Selector<TSource, TResult> = (item: TSource) => TResult;
export type Comparer<T> = (a: T, b: T) => number;
