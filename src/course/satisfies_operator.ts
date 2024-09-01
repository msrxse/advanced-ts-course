/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */

/**
 * TLDR:
 * Satisfies operator helps when the default inference is not narrow enough
 *
 * (a) leaves us with a mood property that is not narrow enough
 *     The type given to vibe leaves mood as an union of the string literals "happy" or "sad",
 *     but we might have wanted this type to be more narrow type, eg. string literal "happy"
 *
 * (b) Satisfies operator will narrow vibe.mood to a string literal type instead.
 *     (Note we also removed the given type (: operator) to vibe)
 *
 * as const could also work but would introduce 'readonly' as well
 *
 */

// (a)

type Vibe = {
  mood: 'happy' | 'sad'
}

const vibe: Vibe = {
  mood: 'happy'
}

vibe.mood // this variables' type is an union of the string literals "happy" or "sad", but you wanted this type to be more narrow

// (b)

type Vibe2 = {
  mood: 'happy' | 'sad'
}

const vibe2 = {
  mood: 'happy'
} satisfies Vibe2

vibe2.mood // now this variable is the more marrow string literal 'happy'

// ANOTHER EXAMPLE

type Color = ColorString | ColorRGB
type ColorString = 'red' | 'blue' | 'yellow' | 'purple'
type ColorRGB = [red: number, green: number, blue: number]

/**
 * ABOUT THE Record<keys, Types> utility type:
 * Constructs an object type whose property keys are Keys
 * and whose property values are Type.
 * This utility can be used to map the properties of a type to another type.
 */
type Theme = Record<string, Color>

const theme = {
  primary: 'red',
  secondary: [0, 255, 0],
  tertiary: 'purpel' // This should ERROR
} satisfies Theme

// the  destructured members types should have been 'number', (in line 64)
// And without satisfies and with the Theme type given to the
// theme object, it would have been "string | number" instead

// Note: This would have worked as well (removing satisfies keyword):
// `const _ensureTheme: Theme = theme`
// but would have left a dangling variable in your code
const [r, g, b] = theme.secondary
