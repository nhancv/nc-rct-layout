import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'

import {createActions} from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  userRequest:['username'],
  request: ['request'],
  success: ['data'],
  failure: ['error']
});

export const ProfileType = Types;
export const ProfileAction =  Creators;
export const ProfileFunction = {
  getData,
  getUser
};

function * getData (api, action) {
  const {request} = action;
  const response = yield call(api.getData, request);
  if (!response.ok) {
    yield put(ProfileAction.success(response))
  } else {
    yield put(ProfileAction.failure())
  }
}

function * getUser (api, action) {
  const {username} = action;
  const response = yield call(api.getUser, username);
  if (response.ok && response.status === 200) {
    yield put(ProfileAction.success(JSON.stringify(response.data)))
  } else {
    yield put(ProfileAction.failure(JSON.stringify(response.data)))
  }
}

