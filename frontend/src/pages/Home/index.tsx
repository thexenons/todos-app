import type { FC } from "react";

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
					{user.username} <button onClick={logout}>Logout</button>
				</div>
			)}
		</Container>
	);
};

export default Home;
