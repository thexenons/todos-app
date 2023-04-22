/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			plugins: [
				[
					"@swc/plugin-styled-components",
					{
						displayName: true,
						ssr: true,
					},
				],
				["@swc-jotai/react-refresh", {}],
				["@swc-jotai/debug-label", {}],
			],
		}),
	],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/tests/setup.ts",
	},
});
