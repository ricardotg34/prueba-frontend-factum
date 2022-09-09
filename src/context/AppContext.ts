import { createContext } from "react";
import { ImageInfo } from "../interfaces/ImageInfo.interface";
import { useHandleState } from "./useHandleState";

export interface MessageInfo {
  type: "success" | "info" | "warning" | "error";
  message: string;
}

type AppContext = ReturnType<typeof useHandleState>

export interface AppState {
  userLogged?: string;
  message: MessageInfo | null;
  images: ImageInfo[];
}

export const initialState: AppState = {
  message: null,
  images: []
}

export const AppContext = createContext<AppContext>({
  state: initialState,
  login: () => {},
  setMessage: () => {},
  logout: () => {},
  uploadImages: () => {}
})