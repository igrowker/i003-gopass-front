import React from "react"
import { Navigate } from "react-router-dom"

import isAuthenticated from "../service/isAuth"

interface PrivateRouteProps {
  element: React.ReactElement
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const authStatus = isAuthenticated()
  return authStatus ? element : <Navigate to="/login" />
}

export default PrivateRoute
