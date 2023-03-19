import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

import dataProvider from "../api/dataProvider";
import { User } from "../api/entities";
import { accessTokenAtom, userAtom } from "../state/user";

const useUser = () => {
	const [user, setUser] = useAtom(userAtom);
	const accessToken = useAtomValue(accessTokenAtom);

	useEffect(() => {
		if (!accessToken || !!user) return;

		dataProvider.endpoints.users_me.get<User>?.().then(setUser);
	}, [accessToken, setUser, user]);

	return user;
};

export default useUser;
