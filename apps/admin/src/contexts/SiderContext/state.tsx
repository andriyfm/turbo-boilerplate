export type StateType = {
  collapsed: boolean
}

export const initialState: StateType = {
  collapsed: false,
}

export type DefaultValueType = {
  state: typeof initialState
  dispatch: React.Dispatch<any>
  setCollapsed: (collapsed: StateType['collapsed']) => void
}

export const defaultValue: DefaultValueType = {
  state: initialState,
  dispatch: () => undefined,
  setCollapsed: () => undefined,
}
