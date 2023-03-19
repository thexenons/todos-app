import dataProvider from "./dataProvider";
import { API_ENDPOINTS, API_METHODS, ENDPOINT } from "./endpoints";
import { Filters, GetList } from "./types";

export const getEndpointConfig = (endpoint: ENDPOINT) =>
	API_ENDPOINTS[endpoint];

export const getEndpointPath = (endpoint: ENDPOINT) =>
	getEndpointConfig(endpoint).path;

export const generateEndpointFunctions = (endpoint: ENDPOINT) => {
	const endpointConfig = getEndpointConfig(endpoint);

	const returnValue: {
		[API_METHODS.GET]?: <T = unknown>(id: number) => Promise<T>;
		[API_METHODS.GET_LIST]?: <T = unknown>(
			filters: Filters
		) => Promise<GetList<T>>;
		[API_METHODS.POST]?: <T = unknown>(body: unknown) => Promise<T>;
		[API_METHODS.PATCH]?: <T = unknown>(
			id: number,
			body: unknown
		) => Promise<T>;
		[API_METHODS.DELETE]?: <T = unknown>(id: number) => Promise<T>;
	} = {};

	for (const method of endpointConfig.methods) {
		if (method === API_METHODS.GET) {
			returnValue.get = <T = unknown>(id: number) =>
				dataProvider.get<T>(endpoint, id);
		}

		if (method === API_METHODS.GET_LIST) {
			returnValue.getList = <T = unknown>(filters: Filters) =>
				dataProvider.getList<T>(endpoint, filters);
		}

		if (method === API_METHODS.POST) {
			returnValue.post = <T = unknown>(body: unknown) =>
				dataProvider.post<T>(endpoint, body);
		}

		if (method === API_METHODS.PATCH) {
			returnValue.patch = <T = unknown>(id: number, body: unknown) =>
				dataProvider.patch<T>(endpoint, id, body);
		}

		if (method === API_METHODS.DELETE) {
			returnValue.delete = <T = unknown>(id: number) =>
				dataProvider.delete<T>(endpoint, id);
		}
	}

	return returnValue;
};

export type EndpointsFunctions = {
	[key in ENDPOINT]: ReturnType<typeof generateEndpointFunctions>;
};
export const generateEndpointsFunctions = (): EndpointsFunctions => {
	const returnValue: Partial<EndpointsFunctions> = {};

	for (const endpoint in API_ENDPOINTS) {
		returnValue[endpoint as ENDPOINT] = generateEndpointFunctions(
			endpoint as ENDPOINT
		);
	}

	return returnValue as EndpointsFunctions;
};
