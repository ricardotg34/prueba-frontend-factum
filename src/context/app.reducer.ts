import { ImageInfo } from "../interfaces/ImageInfo.interface";
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
} | {
  type: 'uploadImages',
  payload: ImageInfo[]
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
    case 'uploadImages':
      return {
        ...state,
        images: action.payload
      }
    default:
      return { ...state }
  }
}