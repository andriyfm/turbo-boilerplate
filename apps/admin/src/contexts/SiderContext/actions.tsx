import React from 'react'
import { ActionType } from './reducer'
import { DefaultValueType, StateType } from './state'

const actions = (
  state: StateType,
  dispatch: React.Dispatch<ActionType>,
): DefaultValueType => {
  const setCollapsed = (collapsed: StateType['collapsed']) => {
    dispatch({ type: 'SET_COLLAPSED', collapsed })
  }

  return { state, dispatch, setCollapsed }
}

export default actions
