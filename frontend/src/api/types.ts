import { API_METHODS } from "./endpoints";

export interface GetList<T = unknown> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Filters {
  limit?: number;
  page?: number;
}

export interface Options {
  filters?: Filters;
  body?: unknown;
  method?: API_METHODS;
  headers?: HeadersInit;
}
