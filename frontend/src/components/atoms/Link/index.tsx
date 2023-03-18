import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { getPagePath } from "../../../router/utils";
import type { LinkProps } from "./types";

const Link: FC<LinkProps> = ({ pageKey, children }) => (
	<RouterLink to={getPagePath(pageKey)}>{children}</RouterLink>
);

export * from "./types";
export default Link;
