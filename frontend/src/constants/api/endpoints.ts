import { API_METHODS, ENDPOINT } from "../../types";

export const API_ENDPOINTS = {
	[ENDPOINT.AUTH_LOGIN]: {
		methods: [API_METHODS.POST],
		path: "/auth/login",
	},
	[ENDPOINT.USERS]: {
		methods: [API_METHODS.POST],
		path: "/users",
	},
	[ENDPOINT.USERS_ME]: {
		methods: [API_METHODS.GET, API_METHODS.PATCH],
		path: "/users/me",
	},
	[ENDPOINT.TODOS_LISTS]: {
		methods: [
			API_METHODS.GET,
			API_METHODS.GET_LIST,
			API_METHODS.POST,
			API_METHODS.PATCH,
			API_METHODS.DELETE,
		],
		path: "/todos-lists",
	},
	[ENDPOINT.TODOS]: {
		methods: [
			API_METHODS.GET,
			API_METHODS.GET_LIST,
			API_METHODS.POST,
			API_METHODS.PATCH,
			API_METHODS.DELETE,
		],
		path: "/todos",
	},
};
