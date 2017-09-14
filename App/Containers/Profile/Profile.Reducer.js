import {ProfileType} from './Profile.Action'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  data: null,
  isFetching: false,
  error: false
});

/* ------------- Reducers ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [ProfileType.USER_REQUEST]: (state, action) => {
    return {...state,
      data: null,
      isFetching: true
    }
  },
  [ProfileType.REQUEST]: (state, action) => {
    return {...state,
      data: null,
      isFetching: true
    }
  },
  [ProfileType.SUCCESS]: (state, action) => {
    return {...state,
      data: action.data,
      isFetching: false
    }
  },
  [ProfileType.FAILURE]: (state, action) => {
    return {...state,
      data: action.error,
      isFetching: false,
      error: true
    }
  }
});
