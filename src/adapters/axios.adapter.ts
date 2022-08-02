import axios from "axios";
import { HttpAdapter } from "./http-adapter.interface";

export class AxiosAdapter implements HttpAdapter {

  private static axiosRequest = axios.create({
    baseURL: 'https://atlantia-dev-test.herokuapp.com/api'
  })

  async get<T>(url: string) {
    const { data } = await AxiosAdapter.axiosRequest.get<T>(url);
    return data;
  }
}