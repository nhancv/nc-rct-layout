import {ProfileType} from './Profile.Action'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  data: null,
  dataFetched: false,
  isFetching: false,
  error: false
});

/* ------------- Reducers ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [ProfileType.REQUEST]: (state, action) => {
    return {
      ...state,
      data: null,
      isFetching: true
    };
  },
  [ProfileType.SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      data: action.data
    }
  },
  [ProfileType.FAILURE]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: true
    }
  }
});
