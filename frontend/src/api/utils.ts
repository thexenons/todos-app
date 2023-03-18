import { API_ENDPOINTS, ENDPOINT } from "./endpoints";

export const getEndpointPath = (endpoint: ENDPOINT) =>
  API_ENDPOINTS[endpoint].path;
