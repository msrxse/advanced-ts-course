/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 *
 * distributive property of conditional types
 *
 * Conditional types are type-level ternary expressions
 *
 * These have a distributive property that provided an union,
 * will check against each member of the union
 *
 * The type never is used to make single branched conditionals
 * so we can still use this distributive property
 *
 */

// Conditional types act as type-level ternary expression
// Very useful with generics
type GroupTypes<T> = T extends number ? { numberType: T } : { unknownType: T }
type NumberType = GroupTypes<11> // { numberType: 11 }
type UnknownType = GroupTypes<'el'> // { unknownType: 'el' }

// What makes conditional types fascinating is their distributive property
// If you provide an union of types, TS will check against each member of the union against the condition
type RamdomUnion = 11 | 'El' | number | boolean
type Output = GroupTypes<RamdomUnion> //type Output = {numberType: number} | {unknownType: false} | {unknownType: true} | {unknownType: "El"}

// But theres a limitation: If we want to map to a single specific shape instead of 2,
// can we omit the conditional? The answer is NO!
type MyArg = number | { value: number }
type ToFunctionArgs<T> = (arg: T) => void

type MyFunction = ToFunctionArgs<MyArg>
// ⚠️ Output: (number | { value: number }) => void
// ✅ Expected: ((number) => void | ({ value: number }) => void)

// Omitting the conditional prevents distributivity, So we turn to the "never" type.
// Using the "never" type allows us to create single-branched conditional types:
type ToFunctionArgs2<T> = T extends T ? (arg: T) => void : never

type MyFunction2 = ToFunctionArgs2<MyArg> // ((arg: number) => void) | ((arg: {value: number}) => void)

/**
 * Notice the condition here.
 * Could also be:
 *  -  T extends unknown
 *  -  T extends any
 * they all serve the same purpose — forcing distributivity.
 */

// In addition, unions are automatically flattened
type MyUnion = 'foo' | 'bar'
type MyTransform<T> = T extends string ? T | Uppercase<T> : never

type Out = MyTransform<MyUnion> //  "foo" | "bar" | "FOO" | "BAR"

// For more see:
// https://dev.to/beqa/intro-to-type-wizardry-iteration-mapping-and-recursion-with-ts-unions-2010
