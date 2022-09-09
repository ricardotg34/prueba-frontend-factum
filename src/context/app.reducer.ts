import { AppState, MessageInfo } from "./AppContext";

type ActionReducer = {
  type: 'login';
  payload: {
    username: string;
  }
} | {
  type: 'logout'
} | {
  type: 'setMessage',
  payload: MessageInfo;
}

export const appReducer = (state: AppState, action: ActionReducer): AppState => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        userLogged: action.payload.username
      }
    case 'logout':
      return {
        ...state,
        userLogged: undefined
      }
    case 'setMessage':
      return {
        ...state,
        message: action.payload
      }
    default:
      return { ...state }
  }
}