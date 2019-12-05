import { combineReducers } from 'redux-immutable'
import login from './login'
import header from './header'
import home from './home'
import detail from './detail'

export default combineReducers({ login, header, home, detail })
