/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * When you need input/output formatted in a very particular way
 */

// We want to assert that user only uses a number or a number followed by px, em or rem.
type CSSValue = number | `${number}px` | `${number}em` | `${number}rem`

function size(input: CSSValue) {
  return typeof input === 'number' ? input + 'px' : 'input'
}

size(123)
size('12px')
size('12em')
size('12ex') // ERROR: Correctly flags the typo

// Another example:

type Size = 'small' | 'medium' | 'large'
type Color = 'primary' | 'secondary'
// The Style type will be the 6 possible combinations of size and color, as you can see by
// hovering over the Style type
type Style = `${Size}-${Color}`

function applyStyle(style: Style) {}

applyStyle('small-primary')
applyStyle('large-secondary')
applyStyle('lare-secondary') // ERROR: Correctly flags the typo
