/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * Implement a generic First<T> that takes an Array T and returns its first element's type.
 *
 *
 */

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

type First<T extends unknown[]> = // any[] is equivalent to Array<any>>, but then we substitute it for unknown if possible
  T extends [] ? never : T[0] // if empty array we want a never instead of undefined ( Theres a test case on this )

// Other approaches
type First1<T extends unknow[]> = T['length'] extends 0 ? never : T[0]

type First2<T extends unknown[]> = T extends never[] // also [never] , a never array is what an empty array is, is doesnt have any values
  ? never
  : T[0]

type First4<T extends unknown[]> = T[0] extends T[number] // if T[0] extends T passing in some number, which is some value of the array
  ? T[0]
  : never

type First5<T extends unknown[]> = '0' extends keyof T // HACK: arrays are objects and array items have keys
  ? never
  : T[0]
