import { PageKey } from "../pages";
import { getPagePath } from "../router/utils";
import { getAccessToken, removeAccessToken } from "../state/user";
import { API_BASE_URL } from "./constants";
import { API_METHODS, ENDPOINT } from "./endpoints";
import { Filters, GetList, Options } from "./types";
import { generateEndpointsFunctions, getEndpointPath } from "./utils";

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

	const accessToken = getAccessToken();

	const response = await fetch(finalUrl, {
		method,
		headers: {
			"Content-Type": "application/json",
			...(accessToken && { Authorization: `Bearer ${accessToken}` }),
			...options?.headers,
		},
		body: body ? JSON.stringify(body) : undefined,
	});
	if (!response.ok) {
		if (response.statusText === "Unauthorized") {
			removeAccessToken();
			window.location.href = getPagePath(PageKey.home);
		}

		throw new Error(response.statusText);
	}

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

const getFn = async <T = unknown>(endpoint: ENDPOINT, id?: number) =>
	await urlFetch<T>(
		`${API_BASE_URL}${getEndpointPath(endpoint)}${id ? `/${id}` : ""}`
	);

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

const dataProvider: {
	urlFetch: typeof urlFetch;
	[API_METHODS.GET_LIST]: typeof getListFn;
	[API_METHODS.GET]: typeof getFn;
	[API_METHODS.POST]: typeof postFn;
	[API_METHODS.PATCH]: typeof patchFn;
	[API_METHODS.DELETE]: typeof deleteFn;
	endpoints: ReturnType<typeof generateEndpointsFunctions>;
} = {
	urlFetch,
	[API_METHODS.GET_LIST]: getListFn,
	[API_METHODS.GET]: getFn,
	[API_METHODS.POST]: postFn,
	[API_METHODS.PATCH]: patchFn,
	[API_METHODS.DELETE]: deleteFn,
	endpoints: generateEndpointsFunctions(),
};

export default dataProvider;
