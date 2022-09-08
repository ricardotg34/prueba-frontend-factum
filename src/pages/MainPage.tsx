import { AppBar, Container, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainPage = (props: Props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}

export default MainPage