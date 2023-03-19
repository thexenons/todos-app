import { useAtom } from "jotai";
import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import dataProvider from "../../api/dataProvider";
import Form from "../../components/forms/Form";
import Input from "../../components/forms/inputs/Input";
import Container from "../../components/layout/Container";
import { getPagePath } from "../../router/utils";
import { accessTokenAtom } from "../../state/user";
import { PageKey } from "../types";
import { LoginFieldValues } from "./types";

const Login: FC = () => {
	const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
	const [isLoading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (accessToken) {
			navigate(getPagePath(PageKey.home));
		}
	}, [accessToken, navigate]);

	const onSubmit = useCallback(
		(values: LoginFieldValues) => {
			setLoading(true);
			dataProvider.endpoints.auth_login.post<{ access_token: string }>?.(values)
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
				<Input
					name="username"
					type="text"
					disabled={isLoading}
					rules={{ required: true }}
				/>
				<Input
					name="password"
					type="password"
					disabled={isLoading}
					rules={{ required: true }}
				/>
				<input type="submit" value="Login" disabled={isLoading} />
			</Form>
		</Container>
	);
};

export default Login;
