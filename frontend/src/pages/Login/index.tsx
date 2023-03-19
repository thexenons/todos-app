import { useAtom } from "jotai";
import { FC, useCallback, useEffect, useState } from "react";

import { postAuthLogin } from "../../api/auth/login/post";
import Form from "../../components/forms/Form";
import Input from "../../components/forms/inputs/Input";
import Container from "../../components/layout/Container";
import router from "../../router";
import { getPagePath } from "../../router/utils";
import { accessTokenAtom } from "../../state/user";
import { PageKey } from "../types";
import { LoginFieldValues } from "./types";

const Login: FC = () => {
	const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (accessToken) {
			router.navigate(getPagePath(PageKey.home));
		}
	}, [accessToken]);

	const onSubmit = useCallback(
		(values: LoginFieldValues) => {
			setLoading(true);
			postAuthLogin<{ access_token: string }>(values)
				.then((res) => {
					setAccessToken(res.access_token);
				})
				.finally(() => setLoading(false));
		},
		[setAccessToken]
	);

	return (
		<Container>
			<h1>Login</h1>
			<Form<LoginFieldValues> onSubmit={onSubmit}>
				<Input name="username" type="text" disabled={isLoading} />
				<Input name="password" type="password" disabled={isLoading} />
				<input type="submit" value="Login" disabled={isLoading} />
			</Form>
		</Container>
	);
};

export default Login;
