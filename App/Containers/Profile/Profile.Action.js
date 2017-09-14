import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'

import {createActions} from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  request: ['request'],
  success: ['data'],
  failure: []
});

export const ProfileType = Types;
export const ProfileAction =  Creators;
export const ProfileFunction = {
  getData
};

function * getData (api, action) {
  const {request} = action;
  const response = yield call(api.getData, request);
  console.log('response', response);
  if (!response.ok) {
    yield put(ProfileAction.success(response))
  } else {
    yield put(ProfileAction.failure())
  }
}

