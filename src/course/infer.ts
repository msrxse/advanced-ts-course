/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * TLDR:
 * Infer: (for Automatic Type Inference)
 *  - A keyword used in conditional types to infer or learn types based on other types.
 *  - Always with conditionals (with the extends keyword)
 *
 *
 *
 */

// ✅ First example: Find the return type of a function

type ReturnFuncType<T> = (...args: any) => T extends infer R ? R : never

const foo = () => 2

type Foo = ReturnFuncType<typeof foo> // type Foo = (...args: any) => () => number

// ⚠️
// ✅ Extract types from tuples or arrays

type FirstElement<T> = T extends [infer U, ...unknown[]] ? U : never // checks if T is a tuple starting with any type U, and if so, it infers the type of the first element.
const data: [string, number, boolean] = ['hello', 42, true]

// Extracting the type of the first element
type First = FirstElement<typeof data>
