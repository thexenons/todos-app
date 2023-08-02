import type { FC } from "react";

import Button from "../../components/atoms/Button";
import Container from "../../components/layout/Container";
import useUser from "../../hooks/useUser";
import { logout } from "../../state/user";
import CreateTodosListForm from "../../components/molecules/CreateTodosListForm";

const Home: FC = () => {
	const user = useUser();

	return (
		<Container>
			<h1>Home</h1>
			<CreateTodosListForm
				isOpen
				onClose={() => console.log("onClose")}
				onSubmit={async (fieldValues) => {
					console.log("onSubmit", { fieldValues });

					return await new Promise<void>((resolve) => {
						setTimeout(() => {
							console.log("onSubmit done");
							resolve();
						}, 1000);
					});
				}}
			/>
			{user && (
				<div>
					{user.username} <Button onClick={logout}>Logout</Button>
				</div>
			)}
		</Container>
	);
};

export default Home;
