import { get } from "./index";
import { config } from "../config";
import { apiRoutes } from "../routes";
import { CategoryFilterType } from "../types";

export const getFilters = () =>
  get<CategoryFilterType[]>(`${config.apiUrl}${apiRoutes.filters}`);
