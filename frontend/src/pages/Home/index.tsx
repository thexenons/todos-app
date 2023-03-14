import { FC } from "react";
import { Link } from "react-router-dom";
import { PageKey } from "..";
import Container from "../../components/layout/Container";
import { getPagePath } from "../../router/utils";

const Home: FC = () => {
	return (
		<Container>
			<h1>Home</h1>
			<Link to={getPagePath(PageKey.test)}>Test link</Link>
		</Container>
	);
};

export default Home;
