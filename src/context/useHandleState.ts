import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { appReducer } from "./app.reducer";
import { initialState, MessageInfo } from "./AppContext";

export const useHandleState = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const navigate = useNavigate();
  const login = (username: string, password: string) => {
    if(username === 'RicardoTG' && password === "123456") {
      dispatch({ type: 'login', payload: { username } })
      navigate('/')
    } else {
      setMessage('error', 'Usuario o contraseña incorrectos')
    }
  }

  const setMessage = (type: MessageInfo['type'], message: MessageInfo['message']) => {
    dispatch({ type: 'setMessage', payload: {
      message,
      type
    } })
  }

  return {
    state,
    login,
    setMessage
  }
}