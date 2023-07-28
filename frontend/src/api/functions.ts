import { API_BASE_URL, PageKey } from "../constants";
import { getPagePath } from "../router/utils";
import { getAccessToken, logout } from "../state/user";
import { API_METHODS, ENDPOINT, Filters, GetList, Options } from "../types";
import { getEndpointPath } from "./utils";

export const parseFilters = (filters: Filters) => {
	const { limit, page } = filters;

	const params = new URLSearchParams();

	if (limit && page) {
		const offset = (page - 1) * limit;

		params.append("limit", limit.toString());
		params.append("offset", offset.toString());
	}

	return params.toString();
};

export const urlFetch = async <T = unknown>(url: string, options?: Options) => {
	const { filters, method = API_METHODS.GET, body } = options || {};
	let finalUrl = url;

	if (filters) finalUrl = `${url}?${parseFilters(filters)}`;

	const accessToken = getAccessToken();

	const response = await fetch(finalUrl, {
		method,
		headers: {
			"Content-Type": "application/json",
			...(accessToken && { Authorization: `Bearer ${accessToken}` }),
			...options?.headers,
		},
		body: body ? JSON.stringify(body) : undefined,
		signal: options?.signal,
	});
	if (!response.ok) {
		if (response.statusText === "Unauthorized") {
			logout();
			window.location.assign(getPagePath(PageKey.login));
			return;
		}

		throw new Error(response.statusText);
	}

	const data: T = await response.json();
	return data;
};

export const getListFn = async <T = unknown>(
	endpoint: ENDPOINT,
	{
		filters = {
			limit: 20,
			page: 1,
		},
		...options
	}: Omit<Options, "method"> = {}
) =>
	await urlFetch<GetList<T>>(`${API_BASE_URL}${getEndpointPath(endpoint)}`, {
		filters,
		...options,
	});

export const getFn = async <T = unknown>(
	endpoint: ENDPOINT,
	id?: number,
	options?: Omit<Options, "method">
) =>
	await urlFetch<T>(
		`${API_BASE_URL}${getEndpointPath(endpoint)}${id ? `/${id}` : ""}`,
		options
	);

export const postFn = async <T = unknown>(
	endpoint: ENDPOINT,
	{
		body,
		...options
	}: Omit<Options, "method" | "body"> & {
		body: Options["body"];
	}
) =>
	await urlFetch<T>(`${API_BASE_URL}${getEndpointPath(endpoint)}`, {
		method: API_METHODS.POST,
		body,
		...options,
	});

export const patchFn = async <T = unknown>(
	endpoint: ENDPOINT,
	id: number,
	{
		body,
		...options
	}: Omit<Options, "methods" | "body"> & {
		body: Options["body"];
	}
) =>
	await urlFetch<T>(`${API_BASE_URL}${getEndpointPath(endpoint)}/${id}`, {
		method: API_METHODS.PATCH,
		body,
		...options,
	});

export const deleteFn = async <T = unknown>(
	endpoint: ENDPOINT,
	id: number,
	options?: Omit<Options, "method">
) =>
	await urlFetch<T>(`${API_BASE_URL}${getEndpointPath(endpoint)}/${id}`, {
		method: API_METHODS.DELETE,
		...options,
	});
