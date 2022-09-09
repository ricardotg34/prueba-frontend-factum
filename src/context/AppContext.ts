import { createContext } from "react";
import { useHandleState } from "./useHandleState";

export interface MessageInfo {
  type: "success" | "info" | "warning" | "error";
  message: string;
}

type AppContext = ReturnType<typeof useHandleState>

export interface AppState {
  userLogged?: string;
  message: MessageInfo | null;
}

export const initialState: AppState = {
  message: null
}

export const AppContext = createContext<AppContext>({
  state: initialState,
  login: () => {},
  setMessage: () => {}
})