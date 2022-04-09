import * as React from 'react'
import actions from './actions'
import reducer from './reducer'
import { defaultValue, initialState } from './state'

const SiderContent = React.createContext(defaultValue)

export const useSider = () => React.useContext(SiderContent)

export const SiderProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const memoized = React.useMemo(
    () => actions(state, dispatch),
    [state, dispatch],
  )

  return (
    <SiderContent.Provider value={memoized}>{children}</SiderContent.Provider>
  )
}
