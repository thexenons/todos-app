import { vi } from "vitest";

import { PageKey } from "../constants";
import { getPagePath } from "../router/utils";
import { API_METHODS, ENDPOINT, GetList } from "../types";
import dataProvider from "./dataProvider";

describe("dataProvider", () => {
	afterEach(() => {
		vi.restoreAllMocks();
		fetchMock.mockClear();
	});

	describe("urlFetch", () => {
		it("should return the data", async () => {
			const data = { data: [], total: 0 };
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.urlFetch<GetList>(
				"should return the data"
			);
			expect(result).toEqual(data);
		});

		it("should return the data with filters", async () => {
			const data = { data: [], total: 0 };
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.urlFetch<GetList>(
				"should return the data with filters",
				{
					filters: { limit: 10, page: 1 },
				}
			);
			expect(result).toEqual(data);
		});

		it("should return the data with accessToken", async () => {
			const data = { data: [], total: 0 };
			fetchMock.mockOnce(JSON.stringify(data));
			vi.mock("../state/user", () => ({
				getAccessToken: vi.fn(() => "test accessToken"),
				logout: vi.fn(),
			}));

			const result = await dataProvider.urlFetch<GetList>(
				"should return the data with accessToken"
			);
			expect(result).toEqual(data);
		});

		it("should return the data with body", async () => {
			const data = { data: [], total: 0 };
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.urlFetch<GetList>(
				"should return the data with body",
				{
					method: API_METHODS.POST,
					filters: { limit: 10, page: 1 },
					body: "test body",
				}
			);
			expect(result).toEqual(data);
		});

		it("should throw an error if the response is not ok", async () => {
			fetchMock.mockResolvedValueOnce({
				ok: false,
				statusText: "test error",
				headers: new Headers(),
				redirected: false,
				status: 0,
				type: "basic",
				url: "",
				clone: function (): Response {
					throw new Error("Function not implemented.");
				},
				body: null,
				bodyUsed: false,
				arrayBuffer: function (): Promise<ArrayBuffer> {
					throw new Error("Function not implemented.");
				},
				blob: function (): Promise<Blob> {
					throw new Error("Function not implemented.");
				},
				formData: function (): Promise<FormData> {
					throw new Error("Function not implemented.");
				},
				json: function (): Promise<unknown> {
					throw new Error("Function not implemented.");
				},
				text: function (): Promise<string> {
					throw new Error("Function not implemented.");
				},
			});

			const result = await dataProvider
				.urlFetch<GetList>("should throw an error if the response is not ok", {
					method: API_METHODS.POST,
					filters: { limit: 10, page: 1 },
					body: "test body",
				})
				.catch((error) => error);

			expect(result).toEqual(new Error("test error"));
		});

		it("should navigate to /login if the response is 401", async () => {
			fetchMock.mockResolvedValueOnce({
				ok: false,
				statusText: "Unauthorized",
				headers: new Headers(),
				redirected: false,
				status: 401,
				type: "basic",
				url: "",
				clone: function (): Response {
					throw new Error("Function not implemented.");
				},
				body: null,
				bodyUsed: false,
				arrayBuffer: function (): Promise<ArrayBuffer> {
					throw new Error("Function not implemented.");
				},
				blob: function (): Promise<Blob> {
					throw new Error("Function not implemented.");
				},
				formData: function (): Promise<FormData> {
					throw new Error("Function not implemented.");
				},
				json: function (): Promise<unknown> {
					throw new Error("Function not implemented.");
				},
				text: function (): Promise<string> {
					throw new Error("Function not implemented.");
				},
			});

			await dataProvider.urlFetch<GetList>(
				"should throw an error if the response is not ok",
				{
					method: API_METHODS.POST,
					filters: { limit: 10, page: 1 },
					body: "test body",
				}
			);

			expect(window.location.assign).toBeCalledWith(getPagePath(PageKey.login));
		});
	});

	describe("getList", () => {
		it("should return the data", async () => {
			const data = { data: [], total: 0 };
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.getList(ENDPOINT.AUTH_LOGIN);
			expect(result).toEqual(data);
		});
	});

	describe("get", () => {
		it("should return the data with id", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.get(ENDPOINT.AUTH_LOGIN, 1);
			expect(result).toEqual(data);
		});

		it("should return the data without id", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.get(ENDPOINT.AUTH_LOGIN);
			expect(result).toEqual(data);
		});
	});

	describe("post", () => {
		it("should return the data", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.post(ENDPOINT.AUTH_LOGIN, {
				body: data,
			});
			expect(result).toEqual(data);
		});
	});

	describe("patch", () => {
		it("should return the data", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.patch(ENDPOINT.AUTH_LOGIN, 1, {
				body: data,
			});
			expect(result).toEqual(data);
		});
	});

	describe("delete", () => {
		it("should return the data", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.delete(ENDPOINT.AUTH_LOGIN, 1);
			expect(result).toEqual(data);
		});
	});

	describe("endpoints", () => {
		it("get", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.endpoints.todos_lists.get?.(1);
			expect(result).toEqual(data);
		});

		it("getList", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.endpoints.todos_lists.getList?.();
			expect(result).toEqual(data);
		});

		it("post", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.endpoints.todos_lists.post?.({});
			expect(result).toEqual(data);
		});

		it("patch", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.endpoints.todos_lists.patch?.(1, {});
			expect(result).toEqual(data);
		});

		it("delete", async () => {
			const data = {};
			fetchMock.mockOnce(JSON.stringify(data));

			const result = await dataProvider.endpoints.todos_lists.delete?.(1);
			expect(result).toEqual(data);
		});
	});
});
