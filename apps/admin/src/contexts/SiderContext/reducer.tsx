import { StateType } from './state'

type SetCollapsed = {
  type: 'SET_COLLAPSED'
  collapsed: StateType['collapsed']
}

export type ActionType = SetCollapsed

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'SET_COLLAPSED':
      return { ...state, collapsed: action.collapsed }

    default:
      return state
  }
}

export default reducer
