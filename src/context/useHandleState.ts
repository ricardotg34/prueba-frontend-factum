import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ImageInfo } from "../interfaces/ImageInfo.interface";
import { appReducer } from "./app.reducer";
import { initialState, MessageInfo } from "./AppContext";

export const useHandleState = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const navigate = useNavigate();
  const login = (username: string, password: string) => {
    if(username === 'RicardoTG' && password === "123456") {
      dispatch({ type: 'login', payload: { username } })
      dispatch({ type: 'clearMessage' })
      navigate('/')
    } else {
      setMessage('error', 'Usuario o contraseña incorrectos')
    }
  }

  const logout = () => {
    dispatch({ type: 'logout'});
    navigate('/login');
  }

  const setMessage = (type: MessageInfo['type'], message: MessageInfo['message']) => {
    dispatch({ type: 'setMessage', payload: {
      message,
      type
    } })
  }

  const uploadImages = (images: ImageInfo[]) => {
    dispatch({ type: 'uploadImages', payload: images})
  }

  const setIsLoading = (state: boolean) => {
    dispatch({ type: 'toggleLoading', payload: state })
  }

  return {
    state,
    login,
    logout,
    uploadImages,
    setMessage,
    setIsLoading
  }
}