/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * Implement the util type If<C, T, F> which accepts condition C,
 * a truthy value T, and a falsy value F.
 * C is expected to be either true or false while T and F can be any type.
 *
 *
 */

type A = If<true, 'a', 'b'> // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

type If<
  C extends boolean, // this discards and errors anything that is not a boolean in C (one test case had it)
  T,
  F
> = C extends true ? T : F
