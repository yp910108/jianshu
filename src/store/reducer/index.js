import { combineReducers } from 'redux-immutable'
import header from './header'
import home from './home'
import detail from './detail'

export default combineReducers({ header, home, detail })
