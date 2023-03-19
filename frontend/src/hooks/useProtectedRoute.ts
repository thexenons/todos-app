import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PageKey } from "../pages";
import { getPagePath } from "../router/utils";
import { accessTokenAtom } from "../state/user";

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
