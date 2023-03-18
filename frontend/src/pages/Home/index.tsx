import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { PageKey } from "..";
import Link from "../../components/atoms/Link";
import Container from "../../components/layout/Container";
import { HomeParams } from "./types";

const Home: FC = () => {
	const { title = "" } = useLoaderData() as HomeParams;

	return (
		<Container>
			<h1>{title}</h1>
			<Link pageKey={PageKey.home}>Home link</Link>
		</Container>
	);
};

export async function getInitialData(): Promise<HomeParams> {
	return {
		title: "Home",
	};
}

export * from "./types";
export default Home;
