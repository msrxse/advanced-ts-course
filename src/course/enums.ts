/* eslint-disable @typescript-eslint/no-unused-vars */
// ENUMS

/**
 * TLDR:
 * Don't use ENUMS, instead use (*) 'union if string literals' or (**) other native JS constructs exist
 * Because fns that use the union as parameter will accept valid parameters without conversion to
 * that type (enums force conversion)
 */

// Not a part of JS, there is a proposal to add them but it has not seen any traction
// TS is best for types only and Enums break this rule

// Numeric Enum
enum LoginMode {
  email = 0,
  social = 1
}

console.log(LoginMode.email) // prints 0
console.log(LoginMode.social) // prints 1
//

function initiateLogin(mode: LoginMode) {
  // ...
}

initiateLogin(LoginMode.email)
initiateLogin(LoginMode.social)

initiateLogin(0)
initiateLogin(1)

// Lookup and reverse lookup
console.log(LoginMode['email']) // prints 0
console.log(LoginMode[0]) // prints 'email'

const keys = Object.keys(LoginMode)
console.log(keys) // prints [ "0", "1", "email", "social" ]

// String Enums

enum LoginMode2 { // not very DRY
  email = 'email',
  social = 'social'
}

function initiateLogin2(mode: LoginMode2) {
  // ...
}

const keys2 = Object.keys(LoginMode2) // prints same as numeric ??
console.log(keys) // prints [ "0", "1", "email", "social" ]

// this can make usage very verbose!
initiateLogin2('email') // Error - need to be the enum, as next line
initiateLogin2(LoginMode2.email)

/**
 * Rather don't use ENUMS
 * Instead:
 */

// (*)

// For example, union on string literals
type LoginMode3 = 'email' | 'social' // very DRY

function initiateLogin3(mode: LoginMode3) {
  // ...
}

initiateLogin3('email') // unlike enums you can pass valid member without converting it

// (**)

/**
 * Other JS native patterns you can use:
 * For when you need a list of valid values you can iterate over
 * (a simple object with keys/values the same)
 */
const LoginMode4 = {
  // imagine this comes from an API and is very large!!
  email: 'email',
  social: 'social'
} as const

type LoginMode5 = keyof typeof LoginMode4 // now the type for LoginMode5 is the same union of
//                                           string literals as LoginMode3
// Also has all the benefits
function initiateLogin4(mode: LoginMode5) {}

initiateLogin4('email') // correct!
