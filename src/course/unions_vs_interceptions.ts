/* eslint-disable @typescript-eslint/no-unused-vars */
type Name = { name: string }
type Age = { age: number }

// Combination Types
// Both union and intersection create more complex types from simpler ones
// Union object will have properties of one OR the other
type Union = Name | Age

// Intersection objects will have the properties of both Name and Age
type Intersection = Name & Age

// EG
const name = { name: 'Jane' }
const age = { age: 29 }
const nameAndAge = { name: 'Jane', age: 29 }

let union: Union

union = name
union = age
// while union is of type Union - it still can have all properties of both
// Name and Age types simply because of the structured typing (Duck typing) behavior in TS
union = nameAndAge

let intersection: Intersection

intersection = nameAndAge
intersection = name // Error: Must have all properties of the intersection
intersection = age // Error: Must have all properties of the intersection
