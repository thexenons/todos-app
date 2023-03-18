export enum API_METHODS {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum ENDPOINT {
  AUTH_LOGIN = "AUTH_LOGIN",
}

export const API_ENDPOINTS = {
  [ENDPOINT.AUTH_LOGIN]: {
    methods: [API_METHODS.POST],
    path: "/auth/login",
  },
};
