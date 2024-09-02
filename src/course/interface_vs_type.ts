/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * Similarities:
 *  - Both support structural hierarchies (extends keyword vs intersection)
 * Differences:
 * - Declaration merging on interfaces
 * - Supporting unions only on types
 * - Conditional types only in type aliases (seen on different lesson)
 */

// ✅ SIMILARITIES

// interface Point2D {
type Point2D = {
  x: number
  y: number
}

// interface Point3D extends Point2D {
type Point3D = Point2D & {
  z: number
}

// Usage is same regardless of type or interface
const point: Point3D = {
  x: 0,
  y: 0,
  z: 0
}
class Example implements Point3D {
  x: 0
  y: 0
  z: 0
}

// ✅ SIMILARITIES: Type aliases - (use vscode right click and choose extract to alias)

// Notice aliases similar to type but no brackets
type NewType = (newValue: string) => void
type NewType_1 = 'text' | 'email'

// example with type / same for interfaces
type InputProps = {
  type: NewType_1
  onChange: NewType
}

// ⚠️ DIFFERENCES: Declaration merging (only on interfaces)

interface Box {
  height: number
  width: number
}
interface Box {
  scale: number
}

const box: Box = { height: 2, width: 4, scale: 10 }

// ⚠️ DIFFERENCES: Supporting unions (only on types)
type NewType_2 = 'text' | 'email'
