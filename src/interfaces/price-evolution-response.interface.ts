export type PriceEvolutionResponse = ProductPriceByDate[]

export interface ProductPriceByDate {
  sku:            string;
  name:           Name;
  price:          number;
  dateExtraction: string;
}


export enum Name {
  Tecate = "Cerveza Tecate Light 355 ml",
  XXAmbar = "Cerveza XX Ambar 325 ml",
  XXLager = "Cerveza XX Lager 355 ml",
}
