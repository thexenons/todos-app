import { API_METHODS } from "./endpoints";
import {
	deleteFn,
	getFn,
	getListFn,
	patchFn,
	postFn,
	urlFetch,
} from "./functions";
import { generateEndpointsFunctions } from "./utils";

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
