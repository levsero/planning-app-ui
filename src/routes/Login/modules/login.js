// ------------------------------------
// Constants
// ------------------------------------
export const AUTHENTICATE = 'AUTHENTICATE'
export const UPDATE_USERNAME = 'UPDATE_USERNAME'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'

// ------------------------------------
// Actions
// ------------------------------------
export function login (authenticated = false) {
  return {
    type: AUTHENTICATE,
    payload: authenticated
  }
}

export function updateUsername (e) {
  return {
    type: UPDATE_USERNAME,
    payload: e.target.value
  }
}

export function updatePassword (e) {
  return {
    type: UPDATE_PASSWORD,
    payload: e.target.value
  }
}

export const actions = {
  login,
  updateUsername,
  updatePassword
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [AUTHENTICATE]: (state, action) => Object.assign({}, state, {
    authenticated: true
  }),
  [UPDATE_USERNAME]: (state, action) => Object.assign({}, state, {    
    username: action.payload
  }),
  [UPDATE_PASSWORD]: (state, action) => Object.assign({}, state, {
    password: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  authenticated: false,
  username: '',
  password: undefined
}

export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
