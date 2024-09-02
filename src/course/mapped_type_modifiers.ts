/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * A mapped type is a generic type which uses a union of PropertyKeys
 * (frequently called with keyof) to iterate through keys to create a type
 *
 * Modifiers:
 * readonly and ?
 * You can remove or add these modifiers by prefixing - or + (+ is assumed)§§
 *
 *
 */

// This next type loops through the properties of the given type
// and returns each property under its key (basically doing nothing, just loops it)

type Mapped<Type> = {
  [Property in keyof Type]: Type[Property]
}

// MODIFIERS (readonly and ?)

// removes readonly attributes from a type's properties
type CreateMutable<T> = {
  -readonly [P in keyof T]: T[P]
}

// Removes optional attributes
type Concrete<T> = {
  [P in keyof T]-?: T[P]
}
