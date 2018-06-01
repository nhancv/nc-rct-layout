import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  userRequest: ['username'],
  request: ['request'],
  success: ['data'],
  failure: ['error']
})

export const ProfileAction = Creators
export const ProfileActionCode = Types
