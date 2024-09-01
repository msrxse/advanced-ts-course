/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * In TypeScript you can reuse the type of a property of another type.
 * User['id'] is a Lookup type which refers to the type of the id property on the User interface
 *
 * Useful if splitting the object doesn't make much sense - as you are using only once
 * Useful when we need to reuse a part of some type that we cannot touch, as from a third-party library
 *
 */

type User = {
  id: string
  name: string
  age: number
  address: {
    street: string
    city: string
    country: string
  }
}

function updateAddress(id: User['id'], address: User['address']) {}

// Lookup types can retrieve nested types as well
type city = User['address']['city']

// Can also use an union
type something = User['name' | 'age']
