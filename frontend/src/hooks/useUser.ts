import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

import { accessTokenAtom, userAtom } from "../state/user";
import { User } from "../types";
import useDataProvider from "./fetch/useDataProvider";

const useUser = () => {
	const dataProvider = useDataProvider();
	const [user, setUser] = useAtom(userAtom);
	const accessToken = useAtomValue(accessTokenAtom);

	useEffect(() => {
		if (!accessToken || !!user) return;

		dataProvider.endpoints.users_me.get<User>?.().then(
			(res) => res && setUser(res)
		);
	}, [accessToken, setUser, user, dataProvider]);

	return user;
};

export default useUser;
