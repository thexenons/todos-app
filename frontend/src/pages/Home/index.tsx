import type { FC } from "react";

import Button from "../../components/atoms/Button";
import Container from "../../components/layout/Container";
import useUser from "../../hooks/useUser";
import { logout } from "../../state/user";

const Home: FC = () => {
	const user = useUser();

	return (
		<Container>
			<h1>Home</h1>
			{user && (
				<div>
					{user.username} <Button onClick={logout}>Logout</Button>
				</div>
			)}
		</Container>
	);
};

export default Home;
