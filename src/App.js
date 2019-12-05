import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Login from './pages/login'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
