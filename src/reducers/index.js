import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import streamReducer from './streamReducers'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
})
