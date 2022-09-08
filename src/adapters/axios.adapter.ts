import axios from "axios";
import { HttpAdapter } from "./http-adapter.interface";

export class AxiosAdapter implements HttpAdapter {

  private static axiosRequest = axios.create({
    baseURL: 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen'
  })

  async get<T>(url: string) {
    const { data } = await AxiosAdapter.axiosRequest.get<T>(url);
    return data;
  }
  
  async post<T, S>(url: string, body: S) {
    const { data } = await AxiosAdapter.axiosRequest.post<T>(url, body);
    return data;
  }


}