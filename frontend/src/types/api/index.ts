import { API_METHODS } from "./endpoints";

export interface GetList<T = unknown> {
	data: T[];
	total: number;
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
	signal?: AbortSignal;
}

export * from "./endpoints";
export * from "./entities";
