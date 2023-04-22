import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});

// Enable vitest-fetch-mock
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

// Mock window.location object
window.location = {
	hash: "test hash",
	host: "test host",
	hostname: "test hostname",
	href: "test href",
	toString: vi.fn(),
	origin: "test origin",
	pathname: "test pathname",
	port: "test port",
	protocol: "test protocol",
	search: "test search",
	assign: vi.fn(),
	reload: vi.fn(),
	replace: vi.fn(),
} as unknown as Location;
