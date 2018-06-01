import { call, put } from 'redux-saga/effects'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Import Action and Api services
import { ProfileAction, ProfileActionCode } from './Profile.Action'
import Api from './Profile.Api'
// Export ActionCode and Services
export default ProfileActionCode
export const ProfileServices = Api.create()

/* ------------- Business logic ------------- */
export const ProfileLogicFunc = {
  getData,
  getUser
}

function* getData(api, action) {
  const { request } = action
  const response = yield call(api.getData, request)
  yield put(ProfileAction.success(response))
}

function* getUser(api, action) {
  const { username } = action
  const response = yield call(api.getUser, username)
  if (response.ok && response.status === 200) {
    yield put(ProfileAction.success(JSON.stringify(response.data)))
  } else {
    yield put(ProfileAction.failure(JSON.stringify(response.data)))
  }
}

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  data: null,
  isFetching: false,
  error: false
})

/* ------------- Reducers ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [ProfileActionCode.USER_REQUEST]: (state, action) => {
    return {
      ...state,
      data: null,
      isFetching: true,
      error: false
    }
  },
  [ProfileActionCode.REQUEST]: (state, action) => {
    return {
      ...state,
      data: null,
      isFetching: true,
      error: false
    }
  },
  [ProfileActionCode.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.data,
      isFetching: false,
      error: false
    }
  },
  [ProfileActionCode.FAILURE]: (state, action) => {
    return {
      ...state,
      data: action.error,
      isFetching: false,
      error: true
    }
  }
})
