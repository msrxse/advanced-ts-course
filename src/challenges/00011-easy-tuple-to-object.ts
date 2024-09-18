/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * See https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
 *
 * Given an array, transform it into an object type and the key/value must be in the provided array.
 */

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly PropertyKey[]> = {
  // PropertyKey is alias for " string | number| symbol "
  [prop in T[number]]: prop // T[number]: we need to index-in (since it is array/tuple, it if was object then it would be 'keyof' )
}

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
