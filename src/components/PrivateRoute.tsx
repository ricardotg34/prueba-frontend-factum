import React, { PropsWithChildren, useContext } from 'react'
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { AppContext } from '../context/AppContext'

const PrivateRoute = (props: PropsWithChildren)=> {
  const { state } = useContext(AppContext);
  return !!state.userLogged ? <>{props.children}</> : <Navigate to='/login' replace />
}

export default PrivateRoute