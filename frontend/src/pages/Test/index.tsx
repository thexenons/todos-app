import { FC } from "react";
import { Link } from "react-router-dom";
import { PageKey } from "..";
import Container from "../../components/layout/Container";
import { getPagePath } from "../../router/utils";

const Test: FC = () => {
	return (
		<Container>
			<h1>Test</h1>
			<Link to={getPagePath(PageKey.home)}>Home link</Link>
		</Container>
	);
};

export default Test;
