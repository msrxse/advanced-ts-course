/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * When you don’t want to repeat yourself, sometimes a type needs to be based on another type.
 * Those 2 types will stay in sync if any changes to the main one
 * (1) - For a type State we want to derive setters
 * (2) - We want to follow naming convention preceding type key with set, as in setName() for the key 'name'
 * using keyword 'as' with a  template literal type
 * (3) Make the mapped type more generic
 * (4) Extend it to have getters as well - with final example
 */

// (1)
type State = {
  name: string
  age: number
}
//

/**
 * {
 *  name: (value: string) => void
 *  age: (value: number) => void
 * }
 *
 * For that state we want to have setters
 * We design the setters type from the State type:
 *   If I derive setters from the State instead of a separate type,
 *   means that in the future both will stay in sync if State where to change
 */
type Setters = {
  [K in keyof State]: (value: State[K]) => void
}

// (2)
// We want to follow the convention of renaming the setter as setName() and setAge()
// For that we can use the 'template literal type'

type SetProperty<K extends string> = `set${Capitalize<K>}`

type ExampleName = SetProperty<'name'> //setName
type ExampleAge = SetProperty<'age'> // setAge

// Applying the template-literal to the above type we get:

/**
 * {
 *  setName: (value: string) => void
 *  setAge: (value: number) => void
 * }
 *
 */
type Setters2 = {
  [K in keyof State as `set${Capitalize<K>}`]: (value: State[K]) => void
}

// (3)
// We can make this type more generic by passing the State as a generic
// The " & string" - the state intersection string rules out anything not string - which Capitalize fn asks for
type Setters3<State> = {
  [K in keyof State & string as `set${Capitalize<K>}`]: (
    value: State[K]
  ) => void
}

// (4)

// Extend it to have getters as well

type Getters<State> = {
  [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K]
}

type Store<State> = Setters3<State> & Getters<State>

// Final example

type PersonState = {
  name: string
  age: number
}

type PersonStore = Store<PersonState>

// declare is used to tell the compiler "this thing (usually a variable) exists already,
// and therefore can be referenced by other code, also there is no need to compile this
// statement into any JavaScript"
declare const personStore: PersonStore
personStore.setName('John')
personStore.setAge(20)
const name: string = personStore.getName()
const age: number = personStore.getAge()
