/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * Exclude utility type
 * Exclude from T those types that are assignable to U
 *
 *
 */

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

type MyExclude<T, U> = // Extract from T those that are assignable to U
  T extends U ? never : T // this conditional becomes distributive cause ii is given an union

// About line 14: If the type of T(left) is a subtype of U(right),
// in other words, if the T(left) type is assignable to the U(right) type,
// it returns never .Otherwise, it will be the value.

// type x = Exclude<1 | 2 | 3, 1> // go to source will show you its implementation
