import { FC } from "react";
import { PageKey } from "..";
import Link from "../../components/atoms/Link";
import Container from "../../components/layout/Container";

const Home: FC = () => {
	return (
		<Container>
			<h1>Home</h1>
			<Link pageKey={PageKey.home}>Home link</Link>
		</Container>
	);
};

export default Home;
