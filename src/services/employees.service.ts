import { AxiosAdapter } from "../adapters/axios.adapter";
import { GetEmployeesResponse, AddEmployeesResquest, AddEmployeesResponse } from "../interfaces/employees.interface";

export class ProductsService {
  private static instance: ProductsService;

  private constructor(private readonly httpProducts: AxiosAdapter = new AxiosAdapter()) {}

  public static getInstance(): ProductsService {
    if (!ProductsService.instance) {
      ProductsService.instance = new ProductsService();
    }
    return ProductsService.instance;
  }

  async getEmployeesList() {
    return await this.httpProducts.get<GetEmployeesResponse>('/employees/ricardo')
  }

  async addEmployee(body: AddEmployeesResquest) {
    return await this.httpProducts.post<AddEmployeesResponse, AddEmployeesResquest>('/employees/ricardo', body)
  }
}
