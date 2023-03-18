import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import pages, { PageKey } from "..";
import Link from "../../components/atoms/Link";
import Container from "../../components/layout/Container";
import { TestParams } from "./types";

const Test: FC = () => {
	const { title = "" } = useLoaderData() as TestParams;

	return (
		<Container>
			<h1>{title}</h1>
			<ul>
				{Object.keys(pages).map((pageKey) => (
					<>
						<li>
							<Link pageKey={pageKey as PageKey}>{pageKey}</Link>
						</li>
						{Object.keys(pages[pageKey as PageKey]?.children || {}).map(
							(childPageKey) => (
								<li style={{ marginLeft: 16 }}>
									<Link pageKey={childPageKey as PageKey}>{childPageKey}</Link>
								</li>
							)
						)}
					</>
				))}
			</ul>
		</Container>
	);
};

export async function getInitialData(): Promise<TestParams> {
	return {
		title: "Test",
	};
}

export * from "./types";
export default Test;
