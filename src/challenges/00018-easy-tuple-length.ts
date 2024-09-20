/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * For given a tuple, you need create a generic Length, pick the length of the tuple
 * When passing not tuples - it is expected to error
 *
 */

type tesla = ['tesla', 'model 3', 'model X', 'model Y'] // these are tuples
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
]

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5

// ⚠️
// ✅
type Length<T extends readonly unknown[]> =
  // with "extends any[]" it will be just an array
  // readonly any[] will be a tuple
  // also "readonly any[]" means empty tuple
  // always try swapping any[] for unknown[] - if it still works the favor unknown
  T['length'] // index notation works for types - index notation doesn't
