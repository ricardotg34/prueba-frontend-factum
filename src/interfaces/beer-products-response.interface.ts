export interface BeerProduct {
  id:              number;
  sku:             string;
  name:            string;
  persistence:     number;
  averagePrice:    number;
  productImage:    string;
  averagePosition: number;
}

export type BeerProductsResponse = BeerProduct[];
