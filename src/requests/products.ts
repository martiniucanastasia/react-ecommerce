import { get } from ".";
import { config } from "../config";
import { apiRoutes } from "../routes";
import { ProductType } from "../types";

export const getProducts = (): Promise<ProductType[]> =>
  get<ProductType[]>(`${config.apiUrl}${apiRoutes.products}`);
