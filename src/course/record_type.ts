/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TLDR:
 * Record<string, number> defines an object where every key is a string and every value is a number.
 *

 * 1. Record with Pick for Selective Type Mapping
 * 2. Record with Readonly for Immutable Properties
 * 3. Record with Partial for Optional Properties
 * 4. Record with Record for Nested Mapping
 */

type UserStatus = Record<'active' | 'inactive' | 'suspended', string>

const userStatus: UserStatus = {
  active: 'User is currently active and can use all features.',
  inactive: 'User is currently inactive and cannot access their account.',
  suspended: 'User account is suspended due to policy violations.'
  // anotherkey: 'Happy to be here' // ⚠️ DOES ERROR HERE
}

// ✅ Record with Pick for Selective Type Mapping
type SelectedUserStatus = Pick<UserStatus, 'active'>
const userStatus2: SelectedUserStatus = {
  active: 'User is currently active and can use all features.'
  // inactive: 'User is currently inactive and cannot access their account.', // ⚠️ DOES ERROR HERE
}

// ✅  Record with Readonly for Immutable Properties
type ReadonlyUserStatus = Readonly<UserStatus> // type ReadonlyUserStatus = { readonly active: string; ...}

// ✅ Record with Partial for Optional Properties
type PartialUserStatus = Partial<UserStatus> // type ReadonlyUserStatus = { active?: string; inactive?: ...}

// ✅ Record with Record for Nested Mapping
type Department = 'desktop' | 'mobile'
const allUsers: Record<Department, UserStatus> = {
  desktop: {
    ...userStatus
  },
  mobile: {
    ...userStatus
  }
}
