import "./App.css"
import React, { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard'
import Auth from "./pages/Auth/Auth"


function App() {
  const { token} = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("authData"))
    if (authData && authData.token) {
      dispatch({
        type: "LOGIN",
        payload: {
          email: authData.email,
          userId: authData.userId,
          token: authData.token,
          role: authData.role,
        }
      })
    }
  },  [])

  let routes

  if (token)
    routes = (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard/mainpage" />
      </Switch>)
  else
    routes = (
      <Switch>
        <Route path="/login" component={Auth} />
        <Redirect to="/login" />
      </Switch>)

  return (
    <div className="App">
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  )
}

export default App