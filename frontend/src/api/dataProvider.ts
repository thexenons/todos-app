import { API_BASE_URL } from "./constants";
import { API_METHODS, ENDPOINT } from "./endpoints";
import { Filters, GetList, Options } from "./types";
import { getEndpointPath } from "./utils";

export const parseFilters = (filters: Filters) => {
	const { limit = 20, page = 1 } = filters;

	const offset = (page - 1) * limit;

	const params = new URLSearchParams();
	params.append("limit", limit.toString());
	params.append("offset", offset.toString());

	return params.toString();
};

const urlFetch = async <T = unknown>(url: string, options?: Options) => {
	const { filters, method = API_METHODS.GET, body } = options || {};
	let finalUrl = url;

	if (filters) finalUrl = `${url}?${parseFilters(filters)}`;

	const response = await fetch(finalUrl, {
		method,
		headers: {
			"Content-Type": "application/json",
			...options?.headers,
		},
		body: body ? JSON.stringify(body) : undefined,
	});
	if (!response.ok) throw new Error(response.statusText);

	const data: T = await response.json();
	return data;
};

const getListFn = async <T = unknown>(
	endpoint: ENDPOINT,
	filters: Filters = {
		limit: 20,
		page: 1,
	}
) =>
	await urlFetch<GetList<T>>(`${API_BASE_URL}${getEndpointPath(endpoint)}`, {
		filters,
	});

const getFn = async <T = unknown>(endpoint: ENDPOINT, id: number) =>
	await urlFetch<T>(`${API_BASE_URL}${getEndpointPath(endpoint)}/${id}`);

const postFn = async <T = unknown>(endpoint: ENDPOINT, body: Options["body"]) =>
	await urlFetch<T>(`${API_BASE_URL}${getEndpointPath(endpoint)}`, {
		method: API_METHODS.POST,
		body,
	});

const patchFn = async <T = unknown>(
	endpoint: ENDPOINT,
	id: number,
	body: Options["body"]
) =>
	await urlFetch<T>(`${API_BASE_URL}${getEndpointPath(endpoint)}/${id}`, {
		method: API_METHODS.PATCH,
		body,
	});

const deleteFn = async <T = unknown>(endpoint: ENDPOINT, id: number) =>
	await urlFetch<T>(`${API_BASE_URL}${getEndpointPath(endpoint)}/${id}`, {
		method: API_METHODS.DELETE,
	});

const DataProvider = {
	urlFetch,
	getList: getListFn,
	get: getFn,
	post: postFn,
	patch: patchFn,
	delete: deleteFn,
};

export default DataProvider;
