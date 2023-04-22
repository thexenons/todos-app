import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getPagePath } from "../router/utils";
import { accessTokenAtom } from "../state/user";
import { PageKey } from "../types";

const useProtectedRoute = (): boolean => {
	const accessToken = useAtomValue(accessTokenAtom);
	const navigate = useNavigate();

	useEffect(() => {
		if (!accessToken) {
			navigate(getPagePath(PageKey.login));
		}
	}, [accessToken, navigate]);

	return !!accessToken;
};

export default useProtectedRoute;
