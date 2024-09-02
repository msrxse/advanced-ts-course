/**
 * TLDR:
 * The keyof operator
 * Takes a type and returns a union of its keys
 */

// Used to query the names of the properties of a type and represent them as a union
type User = {
  id: number
  name: string
}

// So, the UserProperties type is a union of properties that are present in the User interface.
type UserProperties = keyof User // "id" | "name"

// Also, the type of T is a subtype of string
let userProperty: UserProperties = 'id'

const someString: string = userProperty // ✅ assigning a keyof T to a string works!
userProperty = someString // ⚠️ assigning any string to a keyof T doesn't work!
