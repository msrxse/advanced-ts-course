/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * The "in" operator
 * 1. Check if an object or its prototype chain has a property with a name `propNameOrNumber in objectName`
 * 2. Also acts as a type guard (If Else conditionals)
 * 3. When used in a mapped-type definition. Is used as the syntax to iterate over all the items in the union keys
 *
 *
 */

type Example = {
  example: string
}

// ⚠️
// ✅ 1. Check if an object or its prototype chain has a property with a name

const exampleObject = {
  example: true
}
if ('example' in exampleObject) {
  console.log('example exists as a property of exampleObject')
}

// ✅ 2. Act as a type guard

interface A {
  x: number
}
interface B {
  y: number
}
const q: A | B = {
  x: 3,
  y: 2
}
if ('x' in q) {
  // q: A
} else {
  //q: B
}

// ✅ 3. When used in a mapped type definition
// The in here is used as part of the syntax to iterate over all items in a union of keys
interface Person {
  name: string
  age: number
}

// implementing Pick utility type
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P] // we are indexing in keys of T and then grabbing the value at those keys
}

type Name = MyPick<Person, 'name' | 'age'>

// Outside of generics the "in" operator is also useful
// example with array but can also work with very big object

const NETWORK_TYPES = ['devnet', 'testnet', 'mainnet'] as const // This would be very large, e.g. as coming from API

type NetworkType = (typeof NETWORK_TYPES)[number] // build a type from all the keys from a very big array!!

// now you can create an object that has all these network types as properties
const networks: {
  [key in NetworkType]?: string // To make all 3 networks required remove ?
} = {
  devnet: 'myDevnetObject',
  testnet: 'myTestnetObject'
}
