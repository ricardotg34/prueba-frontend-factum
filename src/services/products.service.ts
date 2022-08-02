import { AxiosAdapter } from "../adapters/axios.adapter";
import { BeerProductsResponse } from "../interfaces/beer-products-response.interface";
import { PresenceShareResponse } from "../interfaces/present-share-response.interface";
import { PriceEvolutionResponse } from "../interfaces/price-evolution-response.interface";

export class ProductsService {
  private static instance: ProductsService;

  private constructor(private readonly httpProducts: AxiosAdapter = new AxiosAdapter()) {}

  public static getInstance(): ProductsService {
    if (!ProductsService.instance) {
      ProductsService.instance = new ProductsService();
    }
    return ProductsService.instance;
  }

  async getPriceEvolution() {
    return await this.httpProducts.get<PriceEvolutionResponse>('/price-evolution-chart')
  }

  async getPresentShare() {
    return await this.httpProducts.get<PresenceShareResponse>('/presence-share-chart')
  }

  async getBeerProducts() {
    return await this.httpProducts.get<BeerProductsResponse>('/beer-products')
  }
}
