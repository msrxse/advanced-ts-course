/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * Constructs a type by picking the set of properties Keys
 * (string literal or union of string literals) from Type
 *
 */

type Point3D = {
  x: number
  y: number
  z: number
}

type Point2D = Pick<Point3D, 'x' | 'y'> // ✅ type Point2D = { x: number; y: number; }

// Other Example
type CSSProperties = {
  color?: string
  backgroundColor?: string
  width?: number
  height?: number
  // ...lots more
}

function name(
  element: HTMLElement,
  // size: { width?: 0; height?: 0 } // ⚠️ instead of this, see below!!
  size: Pick<CSSProperties, 'width' | 'height'>
) {}
