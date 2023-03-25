import { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../components/forms/Form";
import Input from "../../components/forms/inputs/Input";
import Container from "../../components/layout/Container";
import useDataProvider from "../../hooks/fetch/useDataProvider";
import { getPagePath } from "../../router/utils";
import { PageKey } from "../types";
import type { RegisterFieldValues } from "./types";

const Register: FC = () => {
	const dataProvider = useDataProvider();
	const navigate = useNavigate();
	const [isLoading, setLoading] = useState(false);

	const onSubmit = useCallback(
		(values: RegisterFieldValues) => {
			setLoading(true);
			dataProvider.endpoints.users
				.post?.(values)
				.then(() => {
					navigate(getPagePath(PageKey.login));
				})
				.finally(() => setLoading(false));
		},
		[dataProvider.endpoints.users, navigate]
	);

	return (
		<Container>
			<h1>Register</h1>
			<Form<RegisterFieldValues> onSubmit={onSubmit}>
				<Input
					name="username"
					type="text"
					label="Username"
					disabled={isLoading}
					rules={{ required: true }}
				/>
				<Input
					name="email"
					type="email"
					label="Email"
					disabled={isLoading}
					rules={{ required: true }}
				/>
				<Input
					name="password"
					type="password"
					label="Password"
					disabled={isLoading}
					rules={{ required: true }}
				/>
				<input type="submit" value="Register" disabled={isLoading} />
			</Form>
		</Container>
	);
};

export default Register;
