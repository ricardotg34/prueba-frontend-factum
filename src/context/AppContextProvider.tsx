import React, { PropsWithChildren } from 'react'
import { AppContext } from './AppContext'
import { useHandleState } from './useHandleState'

const AppContextProvider = (props: PropsWithChildren) => {
  const contextValue = useHandleState();
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;